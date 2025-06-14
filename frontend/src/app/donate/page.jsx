'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DonationPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    purpose: '',
  });
  const [consent, setConsent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (!consent) {
      alert('Please agree to the terms.');
      return;
    }

    try {
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: form.amount }),
      });

      const data = await res.json();
      const { orderId } = data;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Number(form.amount) * 100,
        currency: 'INR',
        name: 'Visoka Welfare Foundation',
        description: form.purpose,
        order_id: orderId,
        handler: function (response) {
          alert(`✅ Payment Successful! ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: '#f97316' },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Navbar />

      <div className="min-h-screen px-4 py-20 bg-white">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-orange-600">
              Donate Now
            </h2>
            <p className="text-gray-700 mt-1">
              Support our mission with your contribution.
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="input-style"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="input-style"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="input-style"
            />
            <input
              type="number"
              name="amount"
              placeholder="Donation Amount (₹)"
              value={form.amount}
              onChange={handleChange}
              className="input-style"
            />
            <input
              type="text"
              name="purpose"
              placeholder="Purpose of Donation"
              value={form.purpose}
              onChange={handleChange}
              className="input-style"
            />
            <label className="flex items-center gap-3 mt-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
              />
              <span className="text-sm text-gray-700">
                I confirm the above information is correct.
              </span>
            </label>
            <button
              onClick={handlePayment}
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold py-3 rounded-xl mt-4 shadow-md"
            >
              🧾 Donate Securely with Razorpay
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DonationPage;
