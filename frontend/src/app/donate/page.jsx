"use client";

import React, { useState } from "react";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DonationPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    purpose: "",
  });

  const [consent, setConsent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDonation = async (e) => {
    e.preventDefault();

    if (!consent) {
      alert("Please agree to the terms before proceeding.");
      return;
    }

    if (typeof window === "undefined" || !window.Razorpay) {
      alert("Razorpay is not loaded yet. Please try again in a few seconds.");
      return;
    }

    try {
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: form.amount }),
      });

      const data = await res.json();

      if (!data.orderId) {
        alert("Error creating order. Please try again.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: form.amount * 100,
        currency: "INR",
        name: "Visoka Welfare Foundation",
        description: form.purpose || "Donation",
        order_id: data.orderId,
        handler: function (response) {
          alert(`Donation Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: "#f97316" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />
      <Navbar />

      <div className="min-h-screen flex flex-col lg:flex-row bg-white">
        {/* Left video with overlay */}
        <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 w-full h-full bg-black/50 flex flex-col justify-center items-center text-white text-center p-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-400 mb-4">Every Rupee Counts</h2>
            <p className="text-lg max-w-md">
              Your donation helps us reach more lives, provide education, meals, and medical support to those in need. 🌍
            </p>
            <p className="mt-4 italic text-sm text-gray-200">
              “No one has ever become poor by giving.” — Anne Frank
            </p>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:w-1/2 flex items-center justify-center px-6 py-12 bg-gray-50">
          <form onSubmit={handleDonation} className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-center text-orange-600 mb-1">Donate Now</h2>
            <p className="text-center text-sm text-gray-700 mb-5">Every contribution counts 💖</p>

            {/* Input fields with emojis */}
            {[
              { name: "name", type: "text", icon: "👤", placeholder: "Name" },
              { name: "email", type: "email", icon: "📧", placeholder: "Email" },
              { name: "phone", type: "tel", icon: "📞", placeholder: "Phone" },
              { name: "amount", type: "number", icon: "₹", placeholder: "Amount" },
              { name: "purpose", type: "text", icon: "📅", placeholder: "Purpose" },
            ].map((input) => (
              <div
                key={input.name}
                className="flex items-center bg-blue-100 text-black px-3 py-2 mb-3 rounded"
              >
                <span className="mr-2 text-lg font-bold text-gray-900">{input.icon}</span>
                <input
                  required
                  className="w-full bg-transparent outline-none placeholder-gray-700"
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={form[input.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Consent */}
            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mr-2 mt-1"
              />
              <p className="text-sm text-gray-700">
                I confirm the above information is correct and I agree to proceed with the donation.
              </p>
            </div>

            {/* Donate Button */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded w-full flex items-center justify-center transition"
            >
              ❤️ Donate Securely with Razorpay
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DonationPage;
