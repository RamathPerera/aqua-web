import { Users, Droplet, Server, Search } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Admin Portal</h1>
        <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-slate-600">System Healthy</span>
        </div>
      </div>

      {/* Admin Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                    <Users className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-500">Total Users</p>
                    <p className="text-2xl font-bold text-slate-900">1,248</p>
                </div>
            </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                    <Droplet className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-500">Total Meters</p>
                    <p className="text-2xl font-bold text-slate-900">3,892</p>
                </div>
            </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="rounded-lg bg-slate-50 p-3 text-slate-600">
                    <Server className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-500">Database Size</p>
                    <p className="text-2xl font-bold text-slate-900">482 MB</p>
                </div>
            </div>
        </div>
      </div>

      {/* User Management Table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
         <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 flex justify-between items-center">
             <h3 className="font-semibold text-slate-800">User Management</h3>
             <div className="relative">
                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                 <input 
                    type="text" 
                    placeholder="Search users..." 
                    className="h-9 w-64 rounded-lg border border-slate-300 bg-white pl-9 text-sm focus:border-blue-500 focus:outline-none"
                 />
             </div>
         </div>
         <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                    <th className="px-6 py-3 font-medium">User</th>
                    <th className="px-6 py-3 font-medium">Role</th>
                    <th className="px-6 py-3 font-medium">Meters</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium text-right">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">Alice Freeman</div>
                        <div className="text-xs text-slate-500">alice@example.com</div>
                    </td>
                    <td className="px-6 py-4"><span className="rounded bg-indigo-100 px-2 py-1 text-xs font-semibold text-indigo-700">ADMIN</span></td>
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4"><span className="text-green-600 font-medium">Active</span></td>
                    <td className="px-6 py-4 text-right">
                        <button className="text-blue-600 hover:underline">Edit</button>
                    </td>
                </tr>
                <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">Bob Smith</div>
                        <div className="text-xs text-slate-500">bob@example.com</div>
                    </td>
                    <td className="px-6 py-4"><span className="rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">USER</span></td>
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4"><span className="text-slate-600">Pending</span></td>
                    <td className="px-6 py-4 text-right">
                        <button className="text-blue-600 hover:underline">Edit</button>
                    </td>
                </tr>
            </tbody>
         </table>
      </div>
    </div>
  );
}