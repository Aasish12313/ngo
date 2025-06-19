"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { MailIcon, SearchIcon } from "lucide-react";

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
     
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contacts/getall`);
        setMessages(res.data);
        setFiltered(res.data);
      } catch (error) {
        console.error("Error fetching contact messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Filter by name or email
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const results = messages.filter(
      msg =>
        msg.name.toLowerCase().includes(query) ||
        msg.email.toLowerCase().includes(query)
    );
    setFiltered(results);
  }, [searchQuery, messages]);

  // Format date/time
  const formatDateTime = iso => {
    const date = new Date(iso);
    return date.toLocaleString();
  };

  return (
    <div className="p-6 bg-gradient-to-b from-green-300 to-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-black-800">
        Contact Message 📬
      </h1>

      <div className="mb-4 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black-400"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading messages...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500">No matching messages found.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-xl">
          <table className="min-w-full bg-white text-sm rounded-lg">
            <thead className="bg-black
            -600 text-white text-left">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Reply</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filtered.map((msg, idx) => (
                <tr key={msg._id} className="hover:bg-black-50 border-b border-gray-200">
                  <td className="py-2 px-4">{idx + 1}</td>
                  <td className="py-2 px-4 font-medium">{msg.name}</td>
                  <td className="py-2 px-4">{msg.email}</td>
                  <td className="py-2 px-4">{msg.phone}</td>
                  <td className="py-2 px-4 max-w-xs truncate">{msg.message}</td>
                  <td className="py-2 px-4 text-gray-500">{formatDateTime(msg.createdAt)}</td>
                  <td className="py-2 px-4">
                    <a
                      href={`mailto:${msg.email}?subject=Re: Your Contact Message`}
                      className="inline-flex items-center gap-2 bg-black-500 hover:bg-black-600 text-white px-4 py-1.5 rounded-lg transition"
                    >
                      <MailIcon size={16} />
                      Reply
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
