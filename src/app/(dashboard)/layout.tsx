import Link from "next/link";
import { 
  LayoutDashboard, 
  Droplets, 
  Bell, 
  Settings, 
  LogOut, 
  Shield 
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- Sidebar --- */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 bg-white pb-4 pt-6 shadow-sm hidden md:flex md:flex-col">
        <div className="px-6 mb-8 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Droplets className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">Aqua</span>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <NavItem href="/dashboard" icon={<LayoutDashboard />} label="Overview" />
          <NavItem href="/alerts" icon={<Bell />} label="Alerts" count={2} />
          
          <div className="pt-4 mt-4 border-t border-slate-100">
             <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">System</p>
             <NavItem href="/admin" icon={<Shield />} label="Admin Portal" />
          </div>
        </nav>

        <div className="px-3 mt-auto">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 md:ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur px-6">
          <h1 className="text-lg font-semibold text-slate-800">Dashboard</h1>
          <div className="flex items-center gap-4">
             <div className="h-8 w-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs">
                JD
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}

// Helper Component for Sidebar Links
function NavItem({ href, icon, label, count }: { href: string; icon: React.ReactNode; label: string; count?: number }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
    >
      <div className="flex items-center gap-3">
        {/* Clone element to force size if needed, usually css handles it */}
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
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