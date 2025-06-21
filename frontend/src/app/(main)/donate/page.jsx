// File: frontend/src/app/donate/page.jsx

"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
// import Navbar from "../../../components/Navbar";

const reviews = [
  {
    name: "Anita Devi",
    title: "Community Leader",
    feedback:
      "The food distribution program during the pandemic helped hundreds of families in our area. Their dedication is remarkable."
  },
  {
    name: "Rahul Mehta",
    title: "Donor",
    feedback:
      "I feel proud to be a part of Visoka’s cause. My contributions are genuinely making a difference."
  },
  {
    name: "Fatima Khan",
    title: "Volunteer",
    feedback:
      "Working with this foundation has been life-changing. The impact we create is inspiring."
  }
];

const DonationPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", amount: "", purpose: "" });
  const [consent, setConsent] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 2000); // Changed to 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const loadRazorpay = () => {
    if (!consent) return alert("Please agree to proceed with the donation.");

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_XXXX",
      amount: form.amount * 100,
      currency: "INR",
      name: "Visoka Welfare Foundation",
      description: form.purpose || "Donation",
      handler: function (response) {
        alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone
      },
      theme: {
        color: "#ff6600"
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* <Navbar /> */}

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white mb-10">
          {[
            { value: "5,247", label: "Total Donations" },
            { value: "25,000+", label: "Lives Touched" },
            { value: "48", label: "Active Projects" },
            { value: "₹12.5L", label: "Funds Raised" }
          ].map(({ value, label }) => (
            <div key={label} className="bg-gradient-to-tr from-purple-500 to-indigo-500 p-6 rounded-xl">
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <h1 className="text-5xl font-bold">
              Your <span className="text-orange-500">Kindness</span> <span className="text-indigo-500">Saves</span> <span className="text-purple-500">Lives</span>
            </h1>
            <p className="mt-4 text-lg max-w-lg">
              Each rupee you donate creates ripples of hope, funding education, healthcare, and emergency relief for those who need it most.
            </p>
            <div className="mt-4 text-sm text-red-500">❤️ Lives Touched: 25,000+   💖 Active Donors: 5,000+</div>

            <div className="mt-8 p-6 bg-indigo-100 rounded-xl shadow">
              <p className="italic text-gray-800 text-md">"{reviews[currentReview].feedback}"</p>
              <div className="mt-2 text-sm font-semibold text-indigo-600">{reviews[currentReview].name}</div>
              <div className="text-xs text-gray-600">{reviews[currentReview].title}</div>
            </div>

            <blockquote className="mt-6 text-sm text-gray-500 border-l-4 border-orange-400 pl-4">
              “No one has ever become poor by giving. The best way to find yourself is to lose yourself in the service of others.” — Mahatma Gandhi
            </blockquote>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">Make a Difference Today</h2>
            <p className="text-center text-sm text-pink-500">Every donation creates hope ❤️</p>

            {/* Preset amounts */}
            <div className="grid grid-cols-2 gap-3 my-4">
              {[500, 1000, 2000, 5000].map((amt, i) => (
                <button
                  key={amt}
                  onClick={() => setForm({ ...form, amount: amt })}
                  className={`rounded-lg px-4 py-3 border text-left transition-all duration-200 text-sm font-medium ${
                    form.amount == amt ? "bg-orange-500 text-white" : "bg-white hover:bg-orange-100 border-orange-300"
                  }`}
                >
                  ₹{amt}
                  <div className="text-xs text-gray-600">
                    {i === 0 && "Feed 10 children"}
                    {i === 1 && "Education for 1 month"}
                    {i === 2 && "Medical aid for 5 people"}
                    {i === 3 && "Emergency relief kit"}
                  </div>
                </button>
              ))}
            </div>

            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Custom Amount (₹)"
              className="w-full px-4 py-3 bg-white rounded border focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <select
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              className="mt-3 w-full px-4 py-3 bg-white rounded border focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a cause</option>
              <option value="Education">Education</option>
              <option value="Food">Food</option>
              <option value="Medical Aid">Medical Aid</option>
              <option value="Emergency Relief">Emergency Relief</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="px-4 py-3 bg-white rounded border focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="px-4 py-3 bg-white rounded border focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full mt-3 px-4 py-3 bg-white rounded border focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <label className="flex items-start gap-2 text-sm mt-4">
              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="mt-1"
              />
              <span>
                I agree to proceed with the donation and understand that my contribution will be used for charitable purposes.
              </span>
            </label>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold py-3 rounded shadow-lg"
              onClick={loadRazorpay}
            >
              💖 Donate Securely →
            </motion.button>

            <p className="text-center text-xs text-gray-600 mt-2">
              🔒 Secure payment powered by Razorpay
            </p>
          </motion.div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default DonationPage;
