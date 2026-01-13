"use client";

import { useState } from "react";
import { User, Lock, Save, Loader2 } from "lucide-react";

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Mock User Data (Replace with real data later)
  const user = {
    fullName: "John Doe",
    email: "john@example.com",
    role: "Homeowner"
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to PATCH /users/me
    setTimeout(() => setIsLoading(false), 1000);
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
        <p className="text-sm text-slate-500">Manage your profile and security preferences.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Profile Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 font-semibold text-slate-900 mb-6">
            <User className="h-5 w-5 text-blue-600" />
            Profile Information
          </h2>
          
          <div className="grid gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <input 
                type="email" 
                disabled 
                value={user.email}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 cursor-not-allowed"
              />
              <p className="text-xs text-slate-400">Email cannot be changed.</p>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Full Name</label>
              <input 
                type="text" 
                defaultValue={user.fullName}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 font-semibold text-slate-900 mb-6">
            <Lock className="h-5 w-5 text-blue-600" />
            Security
          </h2>
          
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-1">
                 <label className="text-sm font-medium text-slate-700">New Password</label>
                 <input type="password" placeholder="••••••••" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none" />
               </div>
               <div className="space-y-1">
                 <label className="text-sm font-medium text-slate-700">Confirm Password</label>
                 <input type="password" placeholder="••••••••" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none" />
               </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            disabled={isLoading}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-70"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Save className="h-4 w-4" /> Save Changes</>}
          </button>
        </div>
      </form>
    </div>
  );
}