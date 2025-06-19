// import React from 'react';

// const Contact = () => {
//   return (
//     <>
//       <Header />

//       <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-4 text-center">
//         <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//         <p className="max-w-xl mx-auto">
//           We'd love to hear from you! Whether you want to volunteer, collaborate, or just ask a question — feel free to get in touch.
//         </p>
//       </section>

//       <section className="flex flex-col md:flex-row justify-center items-start gap-8 py-12 px-4 bg-gray-100">
        
//         {/* Contact Form */}
//         <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
//           <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
//           <form className="space-y-4">
//             <input
//   type="text"
//   placeholder="Name"
//   className="w-full p-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
// />
// <input
//   type="email"
//   placeholder="Email"
//   className="w-full p-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
// />
// <input
//   type="tel"
//   placeholder="Phone Number"
//   className="w-full p-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
// />
// <textarea
//   placeholder="Your Message"
//   rows="4"
//   className="w-full p-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
// />

//             <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition duration-300">Send Message</button>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className="w-full max-w-md space-y-6">
//           <div className="bg-white shadow-xl rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Contact Info</h2>
//             <p className="text-gray-600"><span className="font-bold">Address:</span>11/1124, Indira Nagar, Lucknow, Uttar Pradesh-226016, India</p>
//             <p className="text-gray-600"><span className="font-bold">Phone:</span> +91-9415103204, +91-7985718912</p>
//             <p className="text-gray-600"><span className="font-bold">Email:</span> visokawelfarefoundation@gmail.com</p>
//           </div>

//           <iframe 
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.6147706362416!2d81.0047824955674!3d26.8889217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999596583e8e9e9%3A0xc8748e222f0cc9a9!2sHouse!5e0!3m2!1sen!2sin!4v1749895080000!5m2!1sen!2sin" 
//             width="100%" 
//             height="200" 
//             allowFullScreen="" 
//             loading="lazy" 
//             className="rounded-2xl shadow-md">
//           </iframe>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Contact;
"use client";

import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import React from "react";

const Contact = () => {
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contacts/submit`, values);
        toast.success("Message sent successfully!");
        resetForm();
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong!");
        setSubmitting(false);
      }
    },
  });

  return (
    <>
     

      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-xl mx-auto">
          We'd love to hear from you! Whether you want to volunteer, collaborate, or just ask a question — feel free to get in touch.
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-start gap-8 py-12 px-4 bg-gray-100">
        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
          <form onSubmit={form.handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.values.name}
              onChange={form.handleChange}
              className="w-full p-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.values.email}
              onChange={form.handleChange}
              className="w-full p-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.values.phone}
              onChange={form.handleChange}
              className="w-full p-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.values.message}
              onChange={form.handleChange}
              className="w-full p-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <div className="flex justify-between gap-2">
              <button
                type="submit"
                disabled={form.isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition duration-300"
              >
                {form.isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <button
                type="reset"
                onClick={form.handleReset}
                className="w-full bg-white text-purple-700 border border-purple-600 py-3 rounded-lg hover:bg-purple-100 transition duration-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full max-w-md space-y-6">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Contact Info</h2>
            <p className="text-gray-600"><span className="font-bold">Address:</span> 11/1124, Indira Nagar, Lucknow, Uttar Pradesh-226016, India</p>
            <p className="text-gray-600"><span className="font-bold">Phone:</span> +91-9415103204, +91-7985718912</p>
            <p className="text-gray-600"><span className="font-bold">Email:</span> visokawelfarefoundation@gmail.com</p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889..."
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl shadow-md"
          ></iframe>
        </div>
      </section>

     
    </>
  );
};

export default Contact;
