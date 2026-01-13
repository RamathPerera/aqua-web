"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, PlusCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewMeterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to POST /meters
    // Payload: { name, serialNumber, monthlyBudget, dailyGoal }
    
    setTimeout(() => {
        setIsLoading(false);
        router.push("/dashboard");
    }, 1000);
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm text-slate-500 hover:text-slate-900">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
      </Link>
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Connect New Meter</h1>
        <p className="text-sm text-slate-500">Register a new IoT device to your account.</p>
      </div>

      <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        {/* Device Info */}
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Device Details</h3>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Meter Name</label>
              <input 
                name="name" 
                placeholder="e.g. Main House, Garden" 
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Serial Number</label>
              <input 
                name="serial" 
                placeholder="Found on the back of device (e.g. SN-XXXX)" 
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono focus:border-blue-500 focus:outline-none"
              />
            </div>
        </div>

        <hr className="border-slate-100" />

        {/* Budgeting */}
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Budget Goals</h3>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Daily Goal (L)</label>
                  <input 
                    name="daily" 
                    type="number" 
                    placeholder="300"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Monthly Budget (L)</label>
                  <input 
                    name="monthly" 
                    type="number" 
                    placeholder="9000"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
            </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-70 mt-4"
        >
           {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><PlusCircle className="h-4 w-4" /> Add Meter</>}
        </button>
      </form>
    </div>
  );
}