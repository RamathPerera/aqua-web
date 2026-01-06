"use client";
import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function Dashboard() {
  const [meters, setMeters] = useState([]);

  useEffect(() => {
    api.get('/meters/my').then(res => setMeters(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome back</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meters.map((meter: any) => (
          <div key={meter.id} className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold">{meter.name}</h3>
            <p className="text-gray-500 text-sm">{meter.serialNumber}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-600 font-bold">Goal: {meter.dailyGoal}L</span>
              <a href={`/dashboard/usage/${meter.id}`} className="text-sm bg-gray-100 p-2 rounded">
                View Usage
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}