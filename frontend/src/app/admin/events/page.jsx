'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, CheckCircle, CalendarPlus } from 'lucide-react';

export default function AdminEventPage() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    name: '',
    date: '',
    targetAmount: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/events');
      setEvents(res.data);
    } catch (err) {
      console.error('Failed to fetch events:', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      const res = await axios.post('http://localhost:5000/events', form);
      setEvents([res.data, ...events]);
      setForm({ name: '', date: '', targetAmount: '' });
    } catch (err) {
      console.error('Failed to add event:', err);
    }
  };

const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/events/${id}`);
    setEvents(events.filter((e) => e._id !== id));
  } catch (err) {
    console.error('Delete failed:', err);
  }
};

const toggleCompleted = async (id) => {
  try {
    const res = await axios.put(`http://localhost:5000/events/${id}/complete`);
    setEvents(events.map((e) => (e._id === id ? res.data : e)));
  } catch (err) {
    console.error('Failed to update event:', err);
  }
};


  return (
    <div className="p-8 bg-[#f8f9fc] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 mb-10">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
          <CalendarPlus className="text-blue-600" /> Add New Event
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Event Name"
            className="input input-bordered w-full text-black"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="input input-bordered w-full text-black"
          />
          <input
            type="number"
            name="targetAmount"
            value={form.targetAmount}
            onChange={handleChange}
            placeholder="Target Amount"
            className="input input-bordered w-full text-black"
          />
        </div>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Event
        </button>
      </div>

      <div className="grid gap-4">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-lg text-black">{event.name}</h3>
              <p className="text-gray-600">📅 {new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-600">🎯 Target: ₹{event.targetAmount}</p>
              <p className="text-sm mt-1 text-green-600">
                {event.isCompleted ? '✅ Completed' : '⏳ Ongoing'}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => toggleCompleted(event._id)}
                className={`p-2 rounded-full text-white ${
                  event.isCompleted ? 'bg-yellow-600' : 'bg-green-600'
                }`}
              >
                <CheckCircle size={18} />
              </button>
              <button
                onClick={() => handleDelete(event._id)}
                className="p-2 rounded-full bg-red-600 text-white"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
        {events.length === 0 && <p className="text-center text-gray-500">No events found.</p>}
      </div>
    </div>
  );
}