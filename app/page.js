import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 items-center gap-20">
            <div className="space-y-10 animate-fade-in-up">
              <div className="space-y-6">
                <div className="section-label">Where Execution Meets Growth</div>
                <h1 className="text-7xl md:text-[6.5rem] font-black text-gray-900 leading-[0.9] tracking-tighter">
                  Experience <br />
                  <span className="text-primary italic">Real Growth.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-500 max-w-xl leading-relaxed font-medium">
                  End-to-end Sales, Staffing & <br className="hidden md:block" />Customer Engagement Solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 pt-4">
                <Link href="/services" className="btn-primary">
                  <span>Explore Our Services</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5-5 5M6 7l5 5-5 5" /></svg>
                </Link>
                <Link href="/partners" className="btn-secondary">
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10 transition-transform duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2">
                <Image
                  src="/hero.gif"
                  alt="Growth illustration"
                  width={700}
                  height={600}
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[3rem]"
                  priority
                />
              </div>

              {/* Floating Stat Card (Decorative) */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl z-20 animate-fade-in-up delay-300 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Client Satisfaction</p>
                    <p className="text-xl font-black text-gray-900">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-muted/50 border-y border-gray-100 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2">
              <div className="section-label">The Growth Partner</div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                More than just <br /><span className="text-primary italic">vendor services.</span>
              </h2>
            </div>
            <div className="md:col-span-3 space-y-8">
              <p className="text-2xl text-gray-600 leading-relaxed font-semibold border-l-4 border-primary pl-8 italic">
                Vegavruddhi is the growth partner of choice for brands who want impact, not just effort.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed pl-8">
                We bring <span className="text-gray-900 font-bold">accountability</span>, <span className="text-gray-900 font-bold">agile execution</span>, and <span className="text-gray-900 font-bold">unmatched scale</span>—so you can focus on innovation, while we deliver on ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-24 space-y-6">
            <div className="section-label">Capabilities</div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase text-center leading-none">
              Our Core <br /><span className="text-primary italic">Expertise</span>
            </h2>
            <div className="w-32 h-2 bg-primary rounded-full shadow-[0_4px_12px_rgba(0,77,44,0.3)]" />
          </div>

          <div className="space-y-40">
            {/* Service 1 */}
            <div className="grid lg:grid-cols-2 items-center gap-24 group">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-2 border-gray-50 aspect-video">
                  <Image
                    src="/digital_lead_fulfilment.png"
                    alt="Lead fulfillment"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 576px"
                    className="object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Digital Lead Fulfilment &<br className="hidden md:block" /> Retail Audits
                  </h3>
                  <p className="text-xl text-gray-500 leading-relaxed font-medium">
                    We bridge the digital-to-field gap. Our tech-enabled lead-management process ensures every online lead converts into a verified customer.
                  </p>
                </div>
                <Link href="/service/digital-lead-fulfilment-retail-audits" className="inline-block pt-4">
                  <button className="bg-primary hover:bg-black text-white px-10 py-4 rounded-xl font-black transition-all shadow-xl flex items-center gap-3 group/btn uppercase tracking-widest text-sm">
                    View Case Study
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7" /></svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid lg:grid-cols-2 items-center gap-24 group">
              <div className="space-y-8 order-1 lg:order-1">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Managed Sales <br className="hidden md:block" />Process
                  </h3>
                  <p className="text-xl text-gray-500 leading-relaxed font-medium">
                    Accelerate your market presence with Vegavruddhi's end-to-end managed sales engine. We deploy trained field teams, set targets, and track every sale.
                  </p>
                </div>
                <Link href="/service/managed-sales-process" className="inline-block pt-4">
                  <button className="bg-primary hover:bg-black text-white px-10 py-4 rounded-xl font-black transition-all shadow-xl flex items-center gap-3 group/btn uppercase tracking-widest text-sm">
                    View Case Study
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7" /></svg>
                  </button>
                </Link>
              </div>
              <div className="relative order-2 lg:order-2">
                <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-2 border-gray-50 aspect-video">
                  <Image
                    src="/managed_sales_process.png"
                    alt="Sales process"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 576px"
                    className="object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid lg:grid-cols-2 items-center gap-24 group pb-12">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-2 border-gray-50 aspect-video">
                  <Image
                    src="/activation_partner_programmes.png"
                    alt="Activation programmes"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 576px"
                    className="object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Activation & Partner<br className="hidden md:block" /> Programmes
                  </h3>
                  <p className="text-xl text-gray-500 leading-relaxed font-medium">
                    Bring your brand closer to customers with impactful on-ground activations. From product launches to partner programmes, we handle logistics.
                  </p>
                </div>
                <Link href="/service/activation-partner-programmes" className="inline-block pt-4">
                  <button className="bg-primary hover:bg-black text-white px-10 py-4 rounded-xl font-black transition-all shadow-xl flex items-center gap-3 group/btn uppercase tracking-widest text-sm">
                    View Case Study
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7" /></svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Growth Across Sectors */}
      <section className="py-32 bg-gray-50/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
            <div className="section-label">Our Footprint</div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight uppercase tracking-tight">Driving Growth Across <span className="text-primary italic">Sectors</span></h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
              We partner with industry leaders to reach new customers, scale operations, and deliver measurable outcomes on the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { name: "Edtech", desc: "Digital learning & student acquisition", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { name: "FinTech & E-Payments", desc: "Merchant onboarding & wallet activations", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
              { name: "FMCG & Retail", desc: "Direct-to-consumer & channel sales", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
              { name: "Government & GovTech", desc: "Public service delivery & digitisation", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { name: "E-Commerce & Logistics", desc: "Last-mile delivery & seller acquisition", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { name: "Fashion & Lifestyle", desc: "Brand loyalty & luxury retail experience", icon: "M21 15.5l-6.254-6.254a2.91 2.91 0 010-4.113l.317-.317a2.91 2.91 0 014.112 0L21 6.5M15 9.5l-8.254 8.254a2.91 2.91 0 01-4.112 0l-.317-.317a2.91 2.91 0 010-4.112L11.5 5" },
              { name: "Telecom & Digital Services", desc: "Network expansion & subscriber growth", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.5 9.5 0 0113.434 0m-17.678-4.243a15.5 15.5 0 0121.92 0" }
            ].map((sector, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all group flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={sector.icon} /></svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">{sector.name}</h3>
                <p className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">{sector.desc}</p>
              </div>
            ))}

            {/* Special "More Sectors" placeholder card */}
            <div className="bg-primary p-12 rounded-[2.5rem] border border-primary text-white flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
              </div>
              <p className="text-sm font-black uppercase tracking-widest leading-tight">Exploring more <br />Emerging Sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <StatsSection />

      {/* Ready to Scale CTA */}
      <section className="bg-primary py-20 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Ready to Scale?</h2>
              <p className="text-xl text-gray-200">Let's design your next growth chapter together.</p>
            </div>
            <Link href="#enquiry">
              <button className="bg-white text-primary hover:bg-black hover:text-white px-12 py-5 rounded-full text-xl font-black transition-all shadow-2xl uppercase tracking-widest">
                Enquiry Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-primary text-center mb-24 tracking-tight uppercase">Why Partner with Vegavruddhi?</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 px-4">
              {[
                { title: "Execution Ownership", desc: "We don't outsource, we deliver.", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
                { title: "Pan-India Reach", desc: "Urban & rural coverage with local insight.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
                { title: "Data-Driven Delivery", desc: "Reports, dashboards, and real-time tracking.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                  <div className="w-12 h-12 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} /></svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-gray-900 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 px-4">
              {[
                { title: "Transparent Partnerships", desc: "Clear pricing, clear KPIs, zero hidden costs.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                { title: "Scalable Engagement Models", desc: "Project-based, SLA-linked, or hybrid.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", dark: true }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4 group min-w-[250px]">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform ${item.dark ? 'bg-primary text-white' : 'text-primary'}`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={item.dark ? "2" : "1.5"} d={item.icon} /></svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-gray-900 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight uppercase">What Our Clients Say</h2>
            <p className="text-gray-500 font-medium text-lg italic">"Real experiences from our satisfied customers"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center space-y-6 flex flex-col items-center group hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center overflow-hidden"><svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></div>
              <p className="text-gray-600 italic leading-relaxed">"Vegavruddhi has been instrumental in driving merchant acquisition for our fintech product across North India. Their execution speed and accountability are unmatched."</p>
              <div className="space-y-1"><h4 className="text-lg font-bold text-gray-900 uppercase">Regional Head</h4><p className="text-sm text-gray-500 font-semibold tracking-widest uppercase">Pine Labs</p></div>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center space-y-6 flex flex-col items-center group hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center overflow-hidden"><svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></div>
              <p className="text-gray-600 italic leading-relaxed">"From staffing to activations, the team handled everything seamlessly. They don't just deliver — they partner"</p>
              <div className="space-y-1"><h4 className="text-lg font-bold text-gray-900 uppercase">Manager</h4><p className="text-sm text-gray-500 font-semibold tracking-widest uppercase">Tide India Business</p></div>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center space-y-6 flex flex-col items-center group hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center overflow-hidden"><svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></div>
              <p className="text-gray-600 italic leading-relaxed">"Their professional approach and ability to scale operations in Tier 2 and Tier 3 cities helped us achieve our quarterly targets well ahead of time."</p>
              <div className="space-y-1"><h4 className="text-lg font-bold text-gray-900 uppercase">Operations Lead</h4><p className="text-sm text-gray-500 font-semibold tracking-widest uppercase">Fintech Unicorn</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-32 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">Be Part of India’s Growth Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Vegavruddhi, we don’t just build businesses — we build people. Join our dynamic team of innovators, field leaders, and problem-solvers working across India to power the nation’s most exciting brands.
            </p>
            <div className="flex justify-center gap-8 py-6">
              <div className="text-center font-bold text-xl uppercase italic text-primary">Grow your career</div>
              <div className="text-center font-bold text-xl text-gray-300">|</div>
              <div className="text-center font-bold text-xl uppercase italic text-primary">Learn every day</div>
              <div className="text-center font-bold text-xl text-gray-300">|</div>
              <div className="text-center font-bold text-xl uppercase italic text-primary">Make an impact</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-primary hover:bg-black text-white px-12 py-5 rounded-xl font-bold text-xl shadow-xl transition-all uppercase tracking-widest">Join Vegavruddhi</button>
            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-5 rounded-xl font-bold text-xl transition-all uppercase tracking-widest">Partner With Us</button>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">Grow Together.<br />Win Together.</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                Join our nationwide network of activation partners, staffing agencies, and service collaborators working with India’s leading brands in fintech, FMCG, and e-commerce.
              </p>
              <p className="text-lg text-primary font-bold uppercase tracking-widest italic tracking-tighter">Let’s build opportunities, share success, and deliver growth — together.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-white text-black px-10 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-widest">Become a Partner</button>
                <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest">Join Vegavruddhi</button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-3xl opacity-50" />
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-md">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold uppercase">Nationwide Network</h3>
                  <p className="text-gray-400">Scaling across Tiers 1-4 with hyper-local intelligence and localized teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Enquiry Section */}
      <section className="py-32 bg-white relative overflow-hidden" id="enquiry">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="section-label">Contact Us</div>
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tight leading-none">Let's Design <br /><span className="text-primary italic">Growth Together.</span></h2>
                <p className="text-xl text-gray-500 font-medium max-w-xl">Whether you’re a brand or a partner, we’re ready to help you scale.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col gap-4 group hover:bg-white hover:shadow-2xl transition-all hover:border-primary/20">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Call Us</p><p className="text-xs font-black text-gray-900 tracking-tighter">+91 91166 16636</p></div>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=919116616636&text&type=phone_number&app_absent=0" className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col gap-4 group hover:bg-white hover:shadow-2xl transition-all hover:border-primary/20">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.204-3.714l.353.21c1.472.873 3.166 1.334 4.896 1.335 5.176 0 9.387-4.211 9.39-9.39.002-2.51-.975-4.871-2.752-6.648-1.777-1.777-4.137-2.755-6.647-2.757-5.178 0-9.389 4.211-9.392 9.39-.001 1.838.533 3.626 1.542 5.177l.233.356-.993 3.628 3.71-.973z" /></svg>
                  </div>
                  <div><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p><p className="text-xs font-black text-gray-900 tracking-tighter">+91 91166 16636</p></div>
                </a>
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col gap-4 group hover:bg-white hover:shadow-2xl transition-all hover:border-primary/20">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Us</p><p className="text-xs font-black text-gray-900 tracking-tighter">contact@vega.com</p></div>
                </div>
              </div>
            </div>

            <div className="glass-card p-12 rounded-[3.5rem] border-2 border-gray-50">
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input type="text" placeholder="+91..." className="w-full px-6 py-4 rounded-xl border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold placeholder:text-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 rounded-xl border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold placeholder:text-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">How can we help?</label>
                  <textarea rows={4} placeholder="I'm interested in..." className="w-full px-6 py-4 rounded-xl border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold resize-none placeholder:text-gray-300" />
                </div>
                <button className="w-full btn-primary !py-5 justify-center">
                  Submit Enquiry
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <StickyActions />
      <Footer />
    </div>
  );
}
