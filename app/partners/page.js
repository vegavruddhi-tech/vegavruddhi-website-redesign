import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import Link from "next/link";

export const metadata = {
  title: "Growth Partner Network | Collaborate with Us",
  description: "Join Vegavruddhi's Growth Partner Network. Whether you are an agency, staffing firm, or activation specialist, partner with us to deliver projects for top brands across India.",
  openGraph: {
    title: "Partner with Vegavruddhi | India's Fastest Ecosystem",
    description: "Access a steady flow of projects, transparent payouts, and dedicated support. Register as a Vegavruddhi growth partner today.",
  },
};

export default function GrowthPartnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image 
            src="/partner-hero-bg.png" 
            alt="Network background" 
            fill 
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-black uppercase tracking-widest border border-primary/30 mb-4">Growth Partner Network</div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tight max-w-6xl mx-auto italic">
                Join the <span className="text-primary not-italic">Vegavruddhi</span> <br className="hidden md:block" />Network
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-4xl mx-auto border-y border-white/10 py-8 italic tracking-widest leading-loose">
                Be part of India’s fastest-growing business execution ecosystem. Whether you’re an agency, staffing firm, or activation specialist — <span className="text-white font-black">partner with us to deliver projects for top brands.</span>
            </p>
            <div className="pt-8">
                <a href="#register" className="bg-primary hover:bg-white hover:text-primary text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all uppercase tracking-widest">Register as a Partner →</a>
            </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center mb-24 space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">Why Collaborate With Us?</h2>
                  <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                      { title: "Pan-India Pipeline", desc: "Access a steady flow of projects across every major city in India.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
                      { title: "Transparent Payouts", desc: "Clear tracking and timely disbursements of your project earnings.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                      { title: "Partner Portal", desc: "Real-time project tracking and management via our advanced portal.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                      { title: "Dedicated Support", desc: "Round-the-clock assistance from our partner success managers.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
                  ].map((benefit, i) => (
                      <div key={i} className="bg-gray-50/50 p-10 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group space-y-6">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} /></svg>
                          </div>
                          <div className="space-y-3">
                              <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight leading-tight">{benefit.title}</h4>
                              <p className="text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* How It Works (Timeline) */}
      <section className="py-32 bg-[#111111] text-white">
          <div className="container mx-auto px-4">
              <div className="text-center mb-24 space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">How It Works</h2>
                  <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                  <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
                  
                  {[
                      { step: 1, title: "Submit Details", desc: "Fill out our Partner Registration Form with basic info." },
                      { step: 2, title: "Evaluation", desc: "Our team will connect with you for verification & next steps." },
                      { step: 3, title: "Execution", desc: "Get assignments and begin earning from day one." }
                  ].map((s, i) => (
                      <div key={i} className="relative z-10 text-center space-y-8 flex flex-col items-center group">
                          <div className="w-32 h-32 bg-white/5 border-2 border-white/10 rounded-full flex items-center justify-center text-5xl font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl relative overflow-hidden">
                              <span className="relative z-10">{s.step}</span>
                              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-700" />
                          </div>
                          <div className="space-y-4 max-w-sm">
                              <h4 className="text-2xl font-black uppercase tracking-tight">{s.title}</h4>
                              <p className="text-gray-400 font-medium leading-relaxed">{s.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Partner Form */}
      <section className="py-32 bg-gray-50/30" id="register">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100 grid md:grid-cols-5">
                      <div className="md:col-span-2 bg-primary p-16 text-white flex flex-col justify-center space-y-8 relative">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
                          <h2 className="text-5xl font-black leading-tight uppercase tracking-tight">Partner Form</h2>
                          <p className="text-primary-100/60 font-bold uppercase tracking-widest text-xs">Join India's Fastest Ecosystem</p>
                          <div className="space-y-6 pt-4">
                              <div className="flex gap-4 items-center">
                                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                  </div>
                                  <span className="font-bold text-sm">Verified Credentials</span>
                              </div>
                              <div className="flex gap-4 items-center">
                                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                  </div>
                                  <span className="font-bold text-sm">Quick Onboarding</span>
                              </div>
                          </div>
                      </div>
                      <div className="md:col-span-3 p-16 space-y-6">
                          <form className="space-y-6">
                              <div className="space-y-2">
                                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Name</label>
                                  <input type="text" placeholder="Enter your name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary outline-none transition-all font-bold" />
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email</label>
                                      <input type="email" placeholder="Enter email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary outline-none transition-all font-bold" />
                                  </div>
                                  <div className="space-y-2">
                                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                      <input type="text" placeholder="Enter phone" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary outline-none transition-all font-bold" />
                                  </div>
                              </div>
                              <div className="space-y-2">
                                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Current Location</label>
                                  <input type="text" placeholder="Enter your location" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary outline-none transition-all font-bold" />
                              </div>
                              <button className="w-full bg-[#004d2c] hover:bg-black text-white py-5 rounded-2xl font-black text-xl shadow-2xl transition-all uppercase tracking-widest mt-4">
                                  Register as Partner →
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <StickyActions />
      <Footer />
    </div>
  );
}
