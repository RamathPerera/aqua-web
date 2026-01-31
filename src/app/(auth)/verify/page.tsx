"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Loader2,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { userService } from "@/services/user.service";

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Focus simulation or pasting logic can go here
  // For simplicity, we use a single input for the 6 digits

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return setError("Email is missing. Please register again.");

    setIsLoading(true);
    setError(null);

    try {
      await userService.verify({ email, otp });
      setSuccessMessage("Account verified! Redirecting...");

      // Delay slightly so user sees the success message
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  async function handleResend() {
    if (!email) return;
    setError(null);
    setSuccessMessage(null);

    try {
      await userService.resendOtp({ email });
      setSuccessMessage("A new code has been sent to your email.");
    } catch (err: any) {
      setError(err.message);
    }
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
          <span className="font-medium text-slate-900">
            {email || "your email"}
          </span>
        </p>
      </div>

      {error && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100">
          <AlertCircle className="h-4 w-4" />
          <p>{error}</p>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-600 border border-emerald-100">
          <CheckCircle2 className="h-4 w-4" />
          <p>{successMessage}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2 text-center">
          <label htmlFor="otp" className="sr-only">
            Verification Code
          </label>
          <input
            id="otp"
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
            className="w-full text-center text-3xl font-bold tracking-widest text-slate-900 border-b-2 border-slate-200 bg-transparent py-2 focus:border-blue-600 focus:outline-none placeholder:text-slate-200"
            placeholder="000000"
            required
            disabled={isLoading}
          />
          <p className="text-xs text-slate-400">Enter the 6-digit code</p>
        </div>

        <button
          type="submit"
          disabled={isLoading || otp.length !== 6}
          className="w-full flex justify-center items-center rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Verify Account"
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500">Didn't receive the code?</p>
        <button
          type="button"
          onClick={handleResend}
          className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          <RefreshCw className="mr-2 h-3 w-3" />
          Resend Code
        </button>
      </div>

      <div className="mt-6 text-center border-t border-slate-100 pt-4">
        <Link
          href="/login"
          className="text-sm text-slate-400 hover:text-slate-600"
        >
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
