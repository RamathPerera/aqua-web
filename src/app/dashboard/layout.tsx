export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Aqua</h2>
        <nav className="space-y-4">
          <a href="/dashboard" className="block hover:text-blue-300">Overview</a>
          <a href="/dashboard/meters" className="block hover:text-blue-300">My Meters</a>
          <a href="/dashboard/alerts" className="block hover:text-blue-300">Alerts</a>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}