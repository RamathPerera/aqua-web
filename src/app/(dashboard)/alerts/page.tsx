import { Check, Trash2, AlertTriangle, Info } from "lucide-react";

export default function AlertsPage() {
  const alerts = [
    { id: 1, type: "CRITICAL", title: "Suspected Leak: Garden", message: "Constant flow of 12L/min detected for >20 mins.", time: "10 mins ago", read: false },
    { id: 2, type: "WARNING", title: "Daily Budget Exceeded", message: "You have used 110% of your daily water budget.", time: "2 hours ago", read: true },
    { id: 3, type: "INFO", title: "Monthly Report Ready", message: "Your usage report for August is available.", time: "1 day ago", read: true },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
          <p className="text-sm text-slate-500">Stay updated on your water system events.</p>
        </div>
        <div className="flex gap-2">
            <button className="text-sm font-medium text-slate-600 hover:text-blue-600 px-3 py-1">Mark all read</button>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`flex items-start gap-4 rounded-xl border p-4 transition-all ${
              alert.read ? "bg-white border-slate-200" : "bg-blue-50/50 border-blue-100 shadow-sm"
            }`}
          >
            {/* Icon based on type */}
            <div className={`mt-1 rounded-full p-2 ${
                alert.type === 'CRITICAL' ? 'bg-red-100 text-red-600' : 
                alert.type === 'WARNING' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
            }`}>
                {alert.type === 'CRITICAL' ? <AlertTriangle className="h-4 w-4" /> : <Info className="h-4 w-4" />}
            </div>

            <div className="flex-1">
               <div className="flex justify-between items-start">
                  <h3 className={`font-semibold ${alert.read ? "text-slate-700" : "text-slate-900"}`}>
                    {alert.title}
                  </h3>
                  <span className="text-xs text-slate-400">{alert.time}</span>
               </div>
               <p className="text-sm text-slate-600 mt-1">{alert.message}</p>
            </div>

            <div className="flex gap-2">
               {!alert.read && (
                   <button className="rounded-lg p-2 text-slate-400 hover:bg-white hover:text-blue-600" title="Mark as read">
                     <Check className="h-4 w-4" />
                   </button>
               )}
               <button className="rounded-lg p-2 text-slate-400 hover:bg-white hover:text-red-600" title="Delete">
                 <Trash2 className="h-4 w-4" />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}