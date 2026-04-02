import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";

export const metadata = {
  title: "Our Services | Expert IT & Business Solutions",
  description: "Explore our comprehensive suite of services including Digital Lead Fulfilment, Managed Sales Process, and Activation Partner Programmes. Scalable solutions for your business growth.",
  openGraph: {
    title: "Vegavruddhi Services | Scalable Business Execution",
    description: "Discover how we bridge the gap between strategy and execution with our managed sales, staffing, and customer engagement solutions.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Services Hero */}
      <section className="pt-48 pb-32 bg-[#004d2c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center space-y-10 relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-black uppercase tracking-[0.4em] border border-white/20">
            Solutions
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Our <span className="text-white underline decoration-white/20 underline-offset-8 italic">Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium italic">
            Scalable solutions designed to bridge the gap between business strategy and on-ground execution.
          </p>
          <div className="w-24 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] mx-auto" />
          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/#enquiry">
              <button className="bg-white text-[#004d2c] hover:bg-black hover:text-white px-10 py-5 rounded-2xl font-black text-lg transition-all uppercase tracking-widest shadow-2xl flex items-center gap-3 mx-auto group">
                Add All Services to Enquiry
                <svg className="w-6 h-6 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 space-y-32">
        {/* Service 1 */}
        <div className="container mx-auto px-4" id="digital-lead-fulfilment">
          <div className="grid md:grid-cols-2 items-center gap-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <Image
                src="/service.png"
                alt="Lead fulfillment"
                width={600}
                height={500}
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">Strategy & Audits</span>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                  Digital Lead Fulfilment & Retail Audits
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                We bridge the digital-to-field gap. Our tech-enabled lead-management process ensures every online lead converts into a verified customer. We specialize in real-world verification and retail compliance audits that give you ground-level truths.
              </p>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Real-time lead tracking & status updates
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Pan-India retail availability audits
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Compliance and hygiene monitoring
                </li>
              </ul>
              <div className="pt-6">
                <Link href="/service/digital-lead-fulfilment-retail-audits">
                  <button className="bg-[#004d2c] text-white hover:bg-black px-8 py-4 rounded-xl font-black transition-all uppercase tracking-widest shadow-xl flex items-center gap-2 group">
                    Explore Full Service
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="container mx-auto px-4" id="managed-sales-process">
          <div className="grid md:grid-cols-2 items-center gap-20">
            <div className="order-2 md:order-1 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">Sales & Growth</span>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                  Managed Sales Process
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Accelerate your market presence with Vegavruddhi's end-to-end managed sales engine. We deploy trained field teams, set targets, and track every sale — ensuring your brand grows consistently and predictably.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 font-bold text-gray-900">Field Force Management</div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 font-bold text-gray-900">In-Store Demonstrators</div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 font-bold text-gray-900">B2B Lead Generation</div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 font-bold text-gray-900">Performance Tracking</div>
              </div>
              <div className="pt-6 text-left">
                <Link href="/service/managed-sales-process">
                  <button className="bg-[#004d2c] text-white hover:bg-black px-8 py-4 rounded-xl font-black transition-all uppercase tracking-widest shadow-xl flex items-center gap-2 group">
                    Explore Full Service
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <Image
                src="/service.png"
                alt="Sales process"
                width={600}
                height={500}
                className="relative z-10 w-full h-auto scale-x-[-1] drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="container mx-auto px-4" id="activation-partner-programmes">
          <div className="grid md:grid-cols-2 items-center gap-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <Image
                src="/image.png"
                alt="Activation programmes"
                width={600}
                height={500}
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">Engagement</span>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                  Activation & Partner Programmes
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Bring your brand closer to customers with impactful on-ground activations. From product launches to partner programmes, we handle logistics, manpower, and detailed reporting.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Campaign Management</h4>
                    <p className="text-sm text-gray-600">End-to-end planning and execution of field marketing campaigns.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Partner Networks</h4>
                    <p className="text-sm text-gray-600">Building and managing localized partner ecosystems.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link href="/service/activation-partner-programmes">
                  <button className="bg-[#004d2c] text-white hover:bg-black px-8 py-4 rounded-xl font-black transition-all uppercase tracking-widest shadow-xl flex items-center gap-2 group">
                    Explore Full Service
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Ready to transform your execution?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">Partner with Vegavruddhi and leverage our pan-India reach and expert field teams to drive your business growth.</p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary px-12 py-4 text-lg">Talk to an Expert</button>
            <button className="btn-secondary px-12 py-4 text-lg">Partner With Us</button>
          </div>
        </div>
      </section>

      <StickyActions />
      <Footer />
    </div>
  );
}
