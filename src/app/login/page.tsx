"use client"; // 👈 IMPORTANT: We use this because we have a form (interactive)

import { useState } from 'react';
import api from '@/lib/api';
import { useRouter } from 'next/navigation'; // Next.js version of useNavigate

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      router.push('/dashboard'); // Go to dashboard
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Aqua Login</h1>
        <input 
          type="email" placeholder="Email" 
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" 
          className="w-full p-2 mb-6 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}