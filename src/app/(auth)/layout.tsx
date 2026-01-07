import Link from "next/link";
import { Droplets } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 p-4">
      {/* Logo Header */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <Droplets className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-blue-900">Aqua</span>
        </Link>
        <p className="text-sm text-slate-500">Smart Water Management</p>
      </div>

      {/* The Card Container */}
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl shadow-blue-100 border border-slate-100">
        {children}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Aqua System. Secure IoT Platform.
      </div>
    </div>
  );
}