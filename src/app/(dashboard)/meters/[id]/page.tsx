import { ArrowLeft, Settings, AlertTriangle, Power } from "lucide-react";
import Link from "next/link";

export default function MeterDetailsPage({ params }: { params: { id: string } }) {
  // Mock Data
  const meter = {
    id: params.id,
    name: "Garden Irrigation",
    status: "LEAK",
    currentFlow: "12 L/min",
    totalToday: 850,
    budget: 200,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="rounded-lg p-2 hover:bg-slate-100 text-slate-500">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{meter.name}</h1>
            <p className="text-sm text-slate-500">Serial: SN-8839-XJ • <span className="text-green-600">Online</span></p>
          </div>
        </div>
        <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <Settings className="h-4 w-4" /> Settings
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 shadow-sm shadow-red-200">
                <Power className="h-4 w-4" /> Shut Off Valve
            </button>
        </div>
      </div>

      {/* Critical Alert Banner */}
      {meter.status === "LEAK" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 flex items-start gap-4">
          <div className="rounded-full bg-red-100 p-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-red-900">Leak Detected</h3>
            <p className="text-sm text-red-700 mt-1">
              Constant flow detected for the last 25 minutes. Recommended action: Check external pipes or shut off valve.
            </p>
          </div>
        </div>
      )}

      {/* Main Layout Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        
        {/* Chart Section (Main Column) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm min-h-[400px]">
            <h3 className="font-semibold text-slate-900 mb-6">Real-time Usage Flow</h3>
            
            {/* Chart Placeholder Area */}
            <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 text-slate-400">
               [Recharts Graph Component Goes Here]
            </div>
            
            <div className="mt-4 flex justify-between text-sm text-slate-500">
                <span>00:00</span>
                <span>12:00</span>
                <span>23:59</span>
            </div>
          </div>
        </div>

        {/* Sidebar Stats (Right Column) */}
        <div className="space-y-6">
           {/* Current Readings */}
           <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium text-slate-500 mb-4">Live Metrics</h3>
              <div className="space-y-4">
                  <div>
                      <div className="text-3xl font-bold text-slate-900">{meter.currentFlow}</div>
                      <div className="text-xs text-slate-500">Current Flow Rate</div>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div>
                      <div className="text-3xl font-bold text-slate-900">{meter.totalToday} L</div>
                      <div className="text-xs text-slate-500">Total Today</div>
                  </div>
              </div>
           </div>

           {/* Budget Info */}
           <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium text-slate-500 mb-4">Budgeting</h3>
              <div className="mb-2 flex justify-between text-sm">
                 <span className="text-slate-700">Daily Limit</span>
                 <span className="font-medium">{meter.budget} L</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                 <div className="h-2 w-full rounded-full bg-red-500 animate-pulse" />
              </div>
              <p className="mt-3 text-xs text-red-600 font-medium">
                 You have exceeded your daily limit by 325%.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}