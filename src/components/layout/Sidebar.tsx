"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Droplets,
  Bell,
  Shield,
  LogOut,
  Settings,
  PlusCircle,
  Loader2,
} from "lucide-react";
import { authService } from "@/services/auth.service";
import { useEffect, useState } from "react";
import PermissionGuard from "../auth/PermissionGuard"; // 👈 Import the guard

export default function Sidebar() {
  const pathname = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    authService.logout();
  };

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 bg-white pb-4 pt-6 shadow-sm hidden md:flex md:flex-col">
      <div className="px-6 mb-8 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
          <Droplets className="h-5 w-5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-blue-900">
          Aqua
        </span>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        <NavItem
          href="/dashboard"
          icon={<LayoutDashboard />}
          label="Overview"
          active={isActive("/dashboard")}
        />
        <NavItem
          href="/meters/new"
          icon={<PlusCircle />}
          label="Add Meter"
          active={isActive("/meters/new")}
        />
        <NavItem
          href="/alerts"
          icon={<Bell />}
          label="Alerts"
          count={2}
          active={isActive("/alerts")}
        />
        <NavItem
          href="/settings"
          icon={<Settings />}
          label="Settings"
          active={isActive("/settings")}
        />

        {/* 🛡️ PERMISSION WRAPPER: Only shows if user is ADMIN */}
        <PermissionGuard allowedRoles={["ADMIN"]}>
          <div className="pt-4 mt-4 border-t border-slate-100">
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              System
            </p>
            <NavItem
              href="/admin"
              icon={<Shield />}
              label="Admin Portal"
              active={isActive("/admin")}
            />
          </div>
        </PermissionGuard>
      </nav>

      <div className="px-3 mt-auto">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors disabled:opacity-50"
        >
          {isLoggingOut ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <LogOut className="h-4 w-4" />
          )}
          {isLoggingOut ? "Signing out..." : "Sign Out"}
        </button>
      </div>
    </aside>
  );
}

// Sub-component for individual links
function NavItem({
  href,
  icon,
  label,
  count,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  count?: number;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-blue-50 text-blue-700"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`[&>svg]:h-4 [&>svg]:w-4 ${active ? "text-blue-600" : "text-slate-400"}`}
        >
          {icon}
        </span>
        {label}
      </div>
      {count && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
          {count}
        </span>
      )}
    </Link>
  );
}
