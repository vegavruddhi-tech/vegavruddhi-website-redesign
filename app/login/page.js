import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const portals = [
    {
      title: "TL",
      short: "Portal Access",
      description: "Manage your squad, track performance, and oversee regional operations.",
      href: "https://team-leader-gamma.vercel.app/",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "FSE",
      short: "Portal Access",
      description: "Access your field tasks, update status, and manage on-site logs.",
      href: "https://vegavruddhi-employee-panel-ke56.vercel.app/",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Manager",
      short: "Portal Access",
      description: "Executive overview, strategic planning, and enterprise resource management.",
      href: "#",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 relative overflow-hidden font-sans">
      <Navbar />

      {/* Modern Background Accents */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <main className="pt-28 md:pt-36 pb-20 container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          
          {/* Header Branding */}
          <div className="lg:w-[35%] space-y-10 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/5 inline-block px-3 py-1 rounded-sm">Portal Selection</div>
              <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-black text-gray-900 leading-[0.95] tracking-tight md:tracking-tighter">
                Secure<br />
                <span className="text-primary opacity-90">Gateway.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
                Choose your specialized role to access the relevant management dashboard and tools.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Architecture</p>
                  <p className="text-base md:text-lg font-bold text-gray-900 leading-tight">Identity & Access Management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Portal Options */}
          <div className="lg:w-[65%] grid gap-4 md:gap-6 animate-fade-in-up delay-150 w-full">
            {portals.map((portal, index) => (
              <Link 
                key={index}
                href={portal.href}
                className="group block"
              >
                <div className="relative overflow-hidden bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
                  {/* Subtle Gradient Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 text-gray-400 group-hover:bg-primary group-hover:text-white rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:scale-105 shadow-inner flex-shrink-0">
                      {portal.icon}
                    </div>

                    <div className="flex-grow text-center md:text-left space-y-2 md:space-y-3">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                        <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight group-hover:text-primary transition-colors">{portal.title}</h2>
                        <span className="text-[9px] md:text-[10px] font-black text-primary/60 uppercase tracking-widest">{portal.short}</span>
                      </div>
                      <p className="text-gray-400 font-medium text-xs md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
                        {portal.description}
                      </p>
                      <div className="pt-1 md:pt-2">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 group-hover:bg-primary group-hover:text-white rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300">
                          Click Here
                          <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
