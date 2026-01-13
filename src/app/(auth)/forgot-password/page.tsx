"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Reset Password</h1>
        <p className="text-sm text-slate-500 mt-1">
          Enter your email and we'll send you a reset link.
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="email"
              placeholder="user@example.com"
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Send Reset Link <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <Link href="/login" className="text-slate-500 hover:text-slate-900">
          &larr; Back to Login
        </Link>
      </div>
    </div>
  );
}