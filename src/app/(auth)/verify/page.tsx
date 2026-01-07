"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, ShieldCheck, RefreshCw } from "lucide-react";

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Focus simulation or pasting logic can go here
  // For simplicity, we use a single input for the 6 digits

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Connect to NestJS POST /users/verify
    // Payload: { email, code: otp }

    setTimeout(() => {
      setIsLoading(false);
      router.push("/login"); // Or auto-login
    }, 1500);
  }

  return (
    <div className="p-8">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Verify your email</h1>
        <p className="text-sm text-slate-500 mt-2">
          We sent a verification code to <br />
          <span className="font-medium text-slate-900">{email || "your email"}</span>
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2 text-center">
          <label htmlFor="otp" className="sr-only">Verification Code</label>
          <input
            id="otp"
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
            className="w-full text-center text-3xl font-bold tracking-widest text-slate-900 border-b-2 border-slate-200 bg-transparent py-2 focus:border-blue-600 focus:outline-none placeholder:text-slate-200"
            placeholder="000000"
            required
          />
          <p className="text-xs text-slate-400">Enter the 6-digit code</p>
        </div>

        <button
          type="submit"
          disabled={isLoading || otp.length !== 6}
          className="w-full flex justify-center items-center rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify Account"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500">
          Didn't receive the code?
        </p>
        <button 
          type="button"
          className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          <RefreshCw className="mr-2 h-3 w-3" />
          Resend Code
        </button>
      </div>

      <div className="mt-6 text-center border-t border-slate-100 pt-4">
        <Link href="/login" className="text-sm text-slate-400 hover:text-slate-600">
          &larr; Back to Login
        </Link>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    // Suspense is required when using useSearchParams in Next.js App Router
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <VerifyContent />
    </Suspense>
  );
}