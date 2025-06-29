'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { CalendarDays, Megaphone } from 'lucide-react';

export default function UpcomingEventsCTA() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/events');
      const sorted = res.data.sort((a, b) => new Date(a.date) - new Date(b.date));
      setEvents(sorted);
    } catch (err) {
      console.error('Failed to fetch events:', err);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600 flex items-center gap-2 justify-center">
        <Megaphone className="w-6 h-6 text-orange-500" />
        Upcoming Events
      </h2>

      <div className="space-y-5">
        {events.map((event, index) => (
          <div
            key={event._id}
            className="bg-[#fff7f0] border-l-4 border-orange-500 rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <CalendarDays className="w-4 h-4" />
                  {event.date}
                </div>
              </div>
              <div className="text-orange-600 font-semibold text-sm whitespace-nowrap bg-white px-3 py-1 rounded-full border border-orange-300 shadow-sm">
                ₹{event.targetAmount.toLocaleString()}
              </div>
            </div>
          </div>
        ))}

        {events.length === 0 && (
          <p className="text-sm text-gray-500 text-center">No upcoming events.</p>
        )}
      </div>
    </div>
  );
}
