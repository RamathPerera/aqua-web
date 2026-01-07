import Link from "next/link";
import { Activity, DollarSign, Droplets, ArrowUpRight, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  // Mock Data
  const meters = [
    { id: 1, name: "Main House", status: "Normal", usage: 120, dailyGoal: 400 },
    { id: 2, name: "Garden Irrigation", status: "Leak Detected", usage: 850, dailyGoal: 200 },
  ];

  return (
    <>
      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard 
          title="Total Usage Today" 
          value="970 L" 
          trend="+12%" 
          icon={<Droplets className="h-4 w-4 text-blue-600" />} 
        />
        <StatCard 
          title="Estimated Cost" 
          value="$14.20" 
          trend="+5%" 
          icon={<DollarSign className="h-4 w-4 text-green-600" />} 
        />
        <StatCard 
          title="System Status" 
          value="Attention Needed" 
          alert 
          icon={<Activity className="h-4 w-4 text-red-600" />} 
        />
      </div>

      {/* Meters Grid */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">My Meters</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {meters.map((meter) => (
            <Link 
              key={meter.id} 
              href={`/meters/${meter.id}`}
              className={`group relative overflow-hidden rounded-xl border p-6 transition-all hover:shadow-md ${
                meter.status === "Leak Detected" 
                  ? "border-red-200 bg-red-50/50" 
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{meter.name}</h3>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium mt-2 ${
                    meter.status === "Leak Detected" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                  }`}>
                    {meter.status}
                  </span>
                </div>
                <div className="rounded-lg bg-white p-2 shadow-sm">
                  <Droplets className={`h-5 w-5 ${meter.status === "Leak Detected" ? "text-red-500" : "text-blue-500"}`} />
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Usage</span>
                  <span className="font-medium text-slate-900">{meter.usage} / {meter.dailyGoal} L</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200">
                  <div 
                    className={`h-2 rounded-full ${meter.usage > meter.dailyGoal ? "bg-red-500" : "bg-blue-500"}`} 
                    style={{ width: `${Math.min((meter.usage / meter.dailyGoal) * 100, 100)}%` }}
                  />
                </div>
              </div>
              
              <div className="mt-4 flex items-center text-xs font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                View Details <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
          ))}
          
          {/* Add New Meter Button */}
          <button className="flex h-full min-h-[180px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <span className="text-2xl font-light mb-2">+</span>
            <span className="text-sm font-medium">Add New Meter</span>
          </button>
        </div>
      </div>
    </>
  );
}

function StatCard({ title, value, trend, icon, alert }: { title: string, value: string, trend?: string, icon: any, alert?: boolean }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        {icon}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className={`text-2xl font-bold ${alert ? "text-red-600" : "text-slate-900"}`}>{value}</span>
        {trend && <span className="text-xs font-medium text-green-600 flex items-center">{trend} <ArrowUpRight className="h-3 w-3" /></span>}
      </div>
    </div>
  );
}