
'use client';

import { useSearchParams } from 'next/navigation';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyPage = () => {
  const searchParams = useSearchParams();
  const position = searchParams.get('position') || 'Unknown Position';

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      resume: null,
    },
    onSubmit: async (values, { resetForm }) => {
      if (!values.resume) {
        toast.error("Resume is required!");
        return;
      }

      toast.loading("Uploading resume...");

      try {
        const formData = new FormData();
        formData.append('file', values.resume);
        formData.append('upload_preset', 'anupreset47'); 
        
        const cloudinaryRes = await axios.post(
          'https://api.cloudinary.com/v1_1/du4tklzpq/auto/upload',
          formData
        );

        const resumeUrl = cloudinaryRes.data.secure_url;

        toast.dismiss();
        toast.loading("Submitting application...");

        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/applications/add`, {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          position: position,
          resumeUrl: resumeUrl,
        });

        toast.dismiss();
        toast.success('🎉 Application submitted successfully!', {
          position: 'top-center',
        });
        resetForm();
      } catch (error) {
        toast.dismiss();
        toast.error('❌ Submission failed. Please try again.', {
          position: 'top-center',
        });
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-12 px-4 flex items-center justify-center text-gray-800">
        <div className="bg-white bg-opacity-90 backdrop-blur-md border border-purple-300 p-8 rounded-xl shadow-2xl w-full max-w-lg">
          <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
            Apply for: {position}
          </h1>

          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full px-4 py-3 rounded-lg border border-purple-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full px-4 py-3 rounded-lg border border-purple-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="w-full px-4 py-3 rounded-lg border border-purple-300"
              required
            />
            <textarea
              name="message"
              placeholder="Why are you suitable for this position?"
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="w-full px-4 py-3 rounded-lg border border-purple-300"
              required
            ></textarea>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-1">
                Upload Resume (PDF only)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];

                  if (!file || file.type !== 'application/pdf') {
                    toast.error('Please upload a valid PDF file only.');
                    return;
                  }

                  formik.setFieldValue('resume', file);
                }}
                className="w-full px-4 py-3 rounded-lg border border-purple-300 bg-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-full shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyPage;
