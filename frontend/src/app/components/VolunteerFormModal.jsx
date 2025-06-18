'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VolunteerFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-lg relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <h2 className="text-2xl text-black font-bold mb-4 text-center">Become a Volunteer</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border text-black rounded-md" required />
            <input type="email" placeholder="Email" className="w-full p-3 border text-black rounded-md" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 text-black border rounded-md" required />
            <textarea placeholder="Why do you want to volunteer?" className="w-full p-3 text-black border rounded-md" rows={3} required></textarea>
            <select className="w-full p-3 border text-black rounded-md" required>
              <option value="">Preferred Area of Work</option>
              <option>Education</option>
              <option>Health</option>
              <option>Women Empowerment</option>
              <option>Event Management</option>
            </select>
            <button type="submit" className="bg-orange-500 w-full text-white py-2 rounded-md hover:bg-orange-600 transition">
              Submit
            </button>
          </form>
          <button onClick={onClose} className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl">&times;</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VolunteerFormModal;