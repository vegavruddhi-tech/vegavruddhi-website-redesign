import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";

export const metadata = {
  title: "About Us",
  description: "Learn more about Vegavruddhi, our story, mission, vision, and core values. Discover how we are becoming India's most trusted partner in managed sales and customer engagement.",
  openGraph: {
    title: "About Vegavruddhi | Our Mission & Values",
    description: "Discover the story behind Vegavruddhi and our commitment to excellence, integrity, and social impact across India.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* About Header */}
      <section className="pt-40 pb-20 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">About Vegavruddhi</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 items-center gap-16">
            <div className="lg:col-span-3 space-y-8 animate-fade-in-up">
              <h2 className="text-4xl font-extrabold text-[#004d2c] uppercase tracking-tight">Our Story</h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  Vegavruddhi (growth in Sanskrit-derived sense) was founded with a vision to enable businesses to thrive in dynamic markets.
                  Inspired by the need for partner-led, value-first services, we built an organisation that emphasises not just what gets done—but how it gets done: transparently, ethically and effectively.
                </p>
                <p>
                  Our journey began with a simple belief: <strong className="text-black group-hover:text-primary transition-colors">execution defines success.</strong>
                  From fintech to FMCG, from urban hubs to rural markets — we’ve built teams, systems, and trust where it matters most — on the ground.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl opacity-60" />
              <Image
                src="/about1.png"
                alt="Our Story Illustration"
                width={600}
                height={500}
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#0a2318] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-md space-y-6 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                To be the trusted growth engine for brands, enabling them to engage meaningfully, convert reliably and scale sustainably.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-md space-y-6 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                To be India’s most trusted partner in managed sales, staffing, and customer engagement — combining technology, transparency, and teamwork to fuel business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-gray-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">Our Core Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: "Integrity", desc: "We do what’s right, even when no one’s watching.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Excellence", desc: "We strive for performance that exceeds expectations.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l7.714-2.143L11 3z" },
              { title: "Empathy", desc: "Understanding clients, customers, and field teams alike.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Ownership", desc: "Every project we handle is treated as our own.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { title: "Inclusivity", desc: "We build opportunities for growth — for everyone.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={value.icon} /></svg>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight leading-none">{value.title}</h4>
                  <p className="text-sm font-semibold text-gray-400 group-hover:text-gray-500 transition-colors leading-relaxed px-2">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team & Culture */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl opacity-60" />
              <Image
                src="/about2.png"
                alt="Our Team"
                width={600}
                height={500}
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <h2 className="text-4xl font-extrabold text-[#004d2c] uppercase tracking-tight">Our Team & Culture</h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  Our leadership team brings together decades of experience in fintech, retail, sales, and customer management. We combine strategic thinking with deep on-ground understanding to deliver consistent results.
                </p>
                <p>
                  Our field staff forms the backbone of Vegavruddhi's success — trained, monitored, and motivated to deliver excellence every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Social Impact */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-[#004d2c] uppercase tracking-tight">Our Social Impact</h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  We believe in empowering India's youth through skill development. Our field operations create sustainable livelihoods across semi-urban and rural India while boosting local entrepreneurship and employment.
                </p>
                <p className="text-primary font-black uppercase italic tracking-tighter">
                  For us, growth isn't just commercial — it's community-driven.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-accent/10 rounded-full blur-3xl opacity-60" />
              <Image
                src="/about3.png"
                alt="Social Impact"
                width={600}
                height={500}
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <StickyActions />
      <Footer />
    </div>
  );
}

