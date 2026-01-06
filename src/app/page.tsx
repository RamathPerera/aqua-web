import Link from "next/link";
import { 
  Droplets, 
  ShieldAlert, 
  LineChart, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* --- Navigation --- */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Droplets className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-900">Aqua</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
              How it works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="container px-4 md:px-6 relative mx-auto text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Now with Real-time IoT Simulation
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
                Stop Paying for <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Hidden Water Leaks
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-slate-600 md:text-xl leading-relaxed">
                Monitor your water usage in real-time. Get instant alerts for leaks, 
                predict your monthly bill, and take control of your consumption with Aqua.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4">
                <Link
                  href="/register"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-blue-700 shadow-lg shadow-blue-200"
                >
                  Start Monitoring Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#demo"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 hover:text-blue-600"
                >
                  View Live Demo
                </Link>
              </div>
            </div>
            
            {/* Abstract Dashboard Preview */}
            <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
              <div className="rounded-xl bg-slate-50 p-4 sm:p-8 aspect-[16/9] flex items-center justify-center border border-slate-100">
                {/* Placeholder for a Dashboard Screenshot */}
                <div className="text-center space-y-4">
                  
                  <p className="text-slate-400 text-sm">Interactive Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section id="features" className="container px-4 md:px-6 py-24 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Intelligence for your pipes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Traditional meters only tell you what you owe. Aqua tells you <i>why</i>.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard 
              icon={<ShieldAlert className="h-8 w-8 text-red-500" />}
              title="Instant Leak Detection"
              description="Our algorithms analyze flow patterns every minute. If water runs constantly for 20 minutes, we notify you immediately."
            />
            <FeatureCard 
              icon={<LineChart className="h-8 w-8 text-blue-500" />}
              title="Real-time Analytics"
              description="Watch your consumption live. View historical trends, set daily goals, and predict your bill before it arrives."
            />
            <FeatureCard 
              icon={<Smartphone className="h-8 w-8 text-green-500" />}
              title="Multi-Property Control"
              description="Manage the main house, the garden, and the rental unit all from one account. Role-based access keeps data secure."
            />
          </div>
        </section>

        {/* --- Trust / Stats --- */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
              <Stat number="99.9%" label="Uptime" />
              <Stat number="< 1 min" label="Leak Alert Speed" />
              <Stat number="10k+" label="Liters Saved" />
              <Stat number="24/7" label="IoT Monitoring" />
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="container px-4 md:px-6 py-24 mx-auto text-center">
          <div className="mx-auto max-w-2xl rounded-3xl bg-blue-600 px-6 py-16 sm:p-16 text-white shadow-2xl shadow-blue-200">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take control?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
              Join homeowners who are saving money and preventing water damage with Aqua's smart detection system.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-slate-400" />
            <span className="text-lg font-semibold text-slate-700">Aqua</span>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Aqua Smart Management. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-900">Privacy</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-900">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-4xl font-extrabold text-blue-400">{number}</div>
      <div className="text-slate-400 font-medium">{label}</div>
    </div>
  );
}