import Sidebar from "@/components/layout/Sidebar"; // Import the new component

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Use the new Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64">
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur px-6">
          <h1 className="text-lg font-semibold text-slate-800">Dashboard</h1>
          <div className="flex items-center gap-4">
             {/* Simple User Avatar */}
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