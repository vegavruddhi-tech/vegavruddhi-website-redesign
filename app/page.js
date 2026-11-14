import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-emerald-800 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/40">
        {/* Subtle decorative background gradient glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/3" />
        <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
              {/* Refined Enterprise Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-700/15 bg-white/90 px-4 py-1.5 text-xs font-semibold text-emerald-900 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="tracking-wide">National Ground Operations & Sales Enablement</span>
              </div>

              {/* Master Typography Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em] text-slate-950 leading-[1.08]">
                  Precision Field Execution.{" "}
                  <span className="text-[#004d2c] font-black italic block sm:inline">
                    Measurable Growth.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
                  Vegavruddhi powers India's category-defining brands with end-to-end sales force deployment, GPS-audited lead fulfilment, and high-velocity ground activation across 450+ cities.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#004d2c] text-white text-sm font-bold tracking-wider uppercase hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-950/15 active:scale-[0.98]"
                >
                  <span>Explore Solutions</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="#enquiry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-300/90 bg-white/80 text-slate-800 text-sm font-bold tracking-wider uppercase hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-sm active:scale-[0.98]"
                >
                  <span>Book Consultation</span>
                  <span className="text-emerald-700 font-extrabold">↗</span>
                </Link>
              </div>

              {/* Trust Indicators / Proof Strip */}
              <div className="pt-6 border-t border-slate-200/80">
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-4">
                  Trusted by Growth Leaders Across Key Industries
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-slate-500 font-bold text-sm tracking-tight">
                  <span className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Pine Labs Partner
                  </span>
                  <span className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Tide India Network
                  </span>
                  <span className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Tier-1 Fintechs
                  </span>
                  <span className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> FMCG Distribution
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Media Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Glass Frame */}
                <div className="relative rounded-3xl p-3 bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)]">
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3.4]">
                    <Image
                      src="/hero.gif"
                      alt="Vegavruddhi execution and growth ecosystem"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover"
                      priority
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Metric Badge 1 (Top Right) */}
                <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl px-4 py-2.5 rounded-2xl">
                  <div className="h-9 w-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400">Execution Accuracy</div>
                    <div className="text-sm font-extrabold text-slate-900">99.8% SLA</div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 (Bottom Left) */}
                <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl px-4 py-3 rounded-2xl">
                  <div className="h-9 w-9 rounded-xl bg-[#004d2c]/10 flex items-center justify-center text-[#004d2c]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400">Geographic Footprint</div>
                    <div className="text-sm font-extrabold text-slate-900">Pan-India (450+ Cities)</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Differentiation / Core Value Pillars */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-200/70">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#004d2c]">
              <span>Strategic Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              More Than Vendor Support. <br />
              <span className="text-[#004d2c] italic">True Operational Ownership.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Most ground agencies deliver headcount; Vegavruddhi delivers quota certainty, multi-layer verification, and deep regional territory intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-emerald-700/30 hover:shadow-xl transition-all duration-300 group space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-800/10 text-emerald-800 flex items-center justify-center font-black group-hover:bg-[#004d2c] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Outcome-Linked Accountability</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We align incentives with your bottom-line metrics. Our agreements operate on clear milestone completion, verified activations, and strict SLA compliance.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-emerald-700/30 hover:shadow-xl transition-all duration-300 group space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-800/10 text-emerald-800 flex items-center justify-center font-black group-hover:bg-[#004d2c] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Pan-India Geographic Depth</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Seamless operation across metro hubs and Tier 2–4 clusters. Vernacular field teams ensure brand credibility and frictionless merchant onboarding.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-emerald-700/30 hover:shadow-xl transition-all duration-300 group space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-800/10 text-emerald-800 flex items-center justify-center font-black group-hover:bg-[#004d2c] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Telemetry & Live Auditing</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Every field touchpoint is backed by geo-stamped proof of visit, automated data capture, and transparent client reporting dashboards with zero latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Showcase (Editorial Bento) */}
      <section className="py-24 md:py-36 bg-slate-50/70 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#004d2c]">
              <span>Core Service Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Engineered for Scale. Built for Speed.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore our comprehensive operational suites designed to convert market potential into verified, recurring enterprise revenue.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            
            {/* Capability 1 */}
            <div className="grid lg:grid-cols-12 items-center gap-10 lg:gap-14 bg-white p-8 md:p-12 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200/60 shadow-inner">
                <Image
                  src="/digital_lead_fulfilment.png"
                  alt="Digital lead fulfilment and retail audit dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold tracking-wider uppercase border border-emerald-200">
                  Audit & Conversion Engine
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Digital Lead Fulfilment & Retail Audits
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Bridge the critical gap between digital acquisition and physical conversion. We dispatch field executives to verify retail outlets, onboard merchants, and enforce brand compliance on store shelves.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Geo-tagged merchant verification
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Shelf-share & POS auditing
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Soundbox & QR setup
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Instant fraud prevention
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/service/digital-lead-fulfilment-retail-audits"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#004d2c] hover:text-black transition-colors"
                  >
                    <span>Read capability deep-dive</span>
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="grid lg:grid-cols-12 items-center gap-10 lg:gap-14 bg-white p-8 md:p-12 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold tracking-wider uppercase border border-emerald-200">
                  Feet-On-Street Engine
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Managed Sales Force (FOS)
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Rapidly scale your direct distribution channels without the fixed overhead of internal hiring. We recruit, train, deploy, and govern high-performing field sales personnel aligned with strict sales quotas.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Turnkey sales team deployment
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Dynamic beat & route mapping
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Automated target tracking
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Incentive-driven governance
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/service/managed-sales-process"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#004d2c] hover:text-black transition-colors"
                  >
                    <span>Read capability deep-dive</span>
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200/60 shadow-inner">
                <Image
                  src="/managed_sales_process.png"
                  alt="Managed sales process and field workforce management"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Capability 3 */}
            <div className="grid lg:grid-cols-12 items-center gap-10 lg:gap-14 bg-white p-8 md:p-12 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200/60 shadow-inner">
                <Image
                  src="/activation_partner_programmes.png"
                  alt="On-ground customer activation and partner campaigns"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold tracking-wider uppercase border border-emerald-200">
                  Field Outreach & Presence
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Activation & Partner Programmes
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Establish authentic connections with local consumers. From high-density market roadshows to institutional partnerships and rural village activations, we coordinate all ground logistics, permits, and execution.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    High-density market pop-ups
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Local partner alliances
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Brand experiential sampling
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Tier 3–4 market penetration
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/service/activation-partner-programmes"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#004d2c] hover:text-black transition-colors"
                  >
                    <span>Read capability deep-dive</span>
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sector Coverage Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#004d2c]">
                <span>Industry Sectors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Tailored Solutions for Every Growth Stage
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base max-w-md">
              We understand the compliance, territory dynamics, and operational nuances specific to each major vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "FinTech & Digital Payments",
                desc: "High-volume merchant onboarding, QR installation, Soundbox distribution, and KYC document verifications.",
                badge: "High Velocity",
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
              },
              {
                title: "FMCG & Consumer Goods",
                desc: "Distributor network auditing, retail visibility checks, stock replenishment verification, and B2B ordering.",
                badge: "Retail Depth",
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
              },
              {
                title: "E-Commerce & Logistics",
                desc: "Seller hub onboarding, delivery partner recruiting, physical parcel return audits, and micro-fulfillment support.",
                badge: "Last-Mile",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                title: "Edtech & Education",
                desc: "Student acquisition campaigns, parent counseling field drives, school partnership programs, and tablet delivery.",
                badge: "Direct Contact",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                title: "Government & GovTech",
                desc: "Citizen awareness activations, digital identity verification drives, scheme benefit outreach, and telemetry reporting.",
                badge: "Public Scale",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Telecom & Infrastructure",
                desc: "Enterprise internet sales, fiber footprint field survey audits, SIM activations, and channel distributor management.",
                badge: "Network Reach",
                icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.5 9.5 0 0113.434 0m-17.678-4.243a15.5 15.5 0 0121.92 0",
              },
            ].map((sector, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-[#004d2c]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 text-[#004d2c] flex items-center justify-center group-hover:bg-[#004d2c] group-hover:text-white transition-all shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={sector.icon} />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {sector.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{sector.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Methodology */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12)_0,transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              <span>Operating Framework</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              From Blueprint to Quota Delivery
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Our 4-step governance process guarantees that every territory is audited, verified, and operational within days.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Territory Blueprinting",
                desc: "Data-led mapping of target pin-codes, merchant density, demographic clusters, and competitive benchmarks.",
              },
              {
                step: "02",
                title: "Rapid Deployment",
                desc: "Mobilization of pre-vetted, background-checked field teams trained on your brand guidelines and compliance.",
              },
              {
                step: "03",
                title: "GPS-Audited Execution",
                desc: "Live field capture with geo-stamped visit verification, fraud checks, and digital photo authentication.",
              },
              {
                step: "04",
                title: "SLA Settlement",
                desc: "Real-time telemetry reports, conversion rate optimization, and transparent settlement linked directly to outcomes.",
              },
            ].map((phase, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-4">
                <span className="text-3xl font-black text-emerald-500/80 font-mono">{phase.step}</span>
                <h3 className="text-lg font-bold text-white tracking-tight">{phase.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Stats & Scale */}
      <StatsSection />

      {/* Verified Client Testimonials */}
      <section className="py-24 md:py-32 bg-white border-t border-slate-200/80">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#004d2c]">
              <span>Executive Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Validated by Market Leaders
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              See what enterprise leaders say about our operational reliability and ground performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-500 text-sm">★★★★★</div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "Vegavruddhi has been instrumental in accelerating merchant acquisition for our fintech product across North India. Their execution speed, low leakage, and operational accountability are truly unmatched."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/70">
                <div className="text-sm font-bold text-slate-950">Regional Head</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Pine Labs</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-1 text-amber-500 text-sm">★★★★★</div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                "From specialized staffing to multi-city activation drives, the Vegavruddhi team handled every detail seamlessly. They don't just act like a vendor—they take complete ownership of the growth targets."
              </p>
              <div className="pt-4 border-t border-slate-200/70">
                <div className="text-sm font-bold text-slate-950">Business Manager</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Tide India Business</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-1 text-amber-500 text-sm">★★★★★</div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                "Their disciplined approach and ability to mobilize ground operations in Tier 2 and Tier 3 cities helped us exceed our quarterly acquisition targets weeks ahead of schedule."
              </p>
              <div className="pt-4 border-t border-slate-200/70">
                <div className="text-sm font-bold text-slate-950">Operations Lead</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Tier-1 Fintech Unicorn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Consultation & RFQ Form */}
      <section className="py-24 md:py-36 bg-slate-50 border-t border-slate-200/80" id="enquiry">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Connect & Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#004d2c]">
                  <span>Initiate Partnership</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                  Let’s Architect Your Field Strategy.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Tell us about your target geography and operational scope. Our leadership team responds within 2 business hours with an initial feasibility roadmap.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4">
                <a
                  href="tel:+919116616636"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#004d2c]/40 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#004d2c] flex items-center justify-center font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Phone</div>
                    <div className="text-sm font-bold text-slate-900">+91 91166 16636</div>
                  </div>
                </a>

                <a
                  href="https://api.whatsapp.com/send/?phone=919116616636&text=Hi%20Vegavruddhi,%20I%20would%20like%20to%20discuss%20business%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500/40 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center font-bold">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.204-3.714l.353.21c1.472.873 3.166 1.334 4.896 1.335 5.176 0 9.387-4.211 9.39-9.39.002-2.51-.975-4.871-2.752-6.648-1.777-1.777-4.137-2.755-6.647-2.757-5.178 0-9.389 4.211-9.392 9.39-.001 1.838.533 3.626 1.542 5.177l.233.356-.993 3.628 3.71-.973z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">WhatsApp Hotline</div>
                    <div className="text-sm font-bold text-slate-900">+91 91166 16636</div>
                  </div>
                </a>

                <a
                  href="mailto:saurabh@vegavruddhi.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#004d2c]/40 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#004d2c] flex items-center justify-center font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Corporate Email</div>
                    <div className="text-sm font-bold text-slate-900">saurabh@vegavruddhi.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Corporate Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Mehta"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#004d2c] focus:ring-2 focus:ring-[#004d2c]/10 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#004d2c] focus:ring-2 focus:ring-[#004d2c]/10 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Email *</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#004d2c] focus:ring-2 focus:ring-[#004d2c]/10 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Fintech"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#004d2c] focus:ring-2 focus:ring-[#004d2c]/10 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Primary Area of Interest</label>
                  <select
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-[#004d2c] focus:ring-2 focus:ring-[#004d2c]/10 outline-none transition-all text-sm font-medium"
                    defaultValue="Digital Lead Fulfilment & Retail Audits"
                  >
                    <option>Digital Lead Fulfilment & Retail Audits</option>
                    <option>Managed Sales Process (Feet-on-Street)</option>
                    <option>Activation & Partner Programmes</option>
                    <option>Pan-India Staffing & Expansion</option>
                    <option>Other Strategic Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Project Scope or Cities Involved</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your objectives, target cities, and timeline..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#004d2c] focus:ring-2 focus:ring-[#004d2c]/10 outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#004d2c] text-white text-sm font-bold uppercase tracking-wider hover:bg-slate-950 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Submit Partnership Request</span>
                  <span className="text-emerald-300">→</span>
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
