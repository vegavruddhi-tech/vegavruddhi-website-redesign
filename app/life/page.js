import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import Link from "next/link";

export const metadata = {
  title: "Life at Vegavruddhi | Our Culture & Team",
  description: "Experience the vibrant culture at Vegavruddhi. Discover our vibe pillars, collaborative magic, and the team driving growth across India. Join our tribe today.",
  openGraph: {
    title: "Life @ Vegavruddhi | Passion Meets Execution",
    description: "Explore our work culture, team meetups, and the milestones we celebrate. See what makes Vegavruddhi a unique place to work.",
  },
};

export default function LifeAtVegavruddhi() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-gray-900 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
            alt="Team background" 
            fill 
            className="object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-bold uppercase tracking-widest border border-primary/30">Work & Play</div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tight max-w-6xl mx-auto italic">
                Life @ <span className="text-primary not-italic">Vegavruddhi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto border-t border-white/10 pt-8 uppercase tracking-[0.2em]">
                Where passion meet execution, <span className="text-white">and milestones become celebrations.</span>
            </p>
        </div>
      </section>

      {/* Culture Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10">
                      <div className="space-y-4">
                          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tight leading-none">Not Just a Team,<br /><span className="text-primary italic">A Tribe.</span></h2>
                          <div className="w-20 h-2 bg-primary rounded-full transition-all group-hover:w-40" />
                      </div>
                      <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-bold">
                          <p>
                              At Vegavruddhi, we don't believe in the 9-to-5 grind. We believe in the "win-together" mindset. Our culture is built on the fuel of ambition and the glue of empathy.
                          </p>
                          <p>
                              Whether we are cracking a high-value merchant onboarding in the field or strategizing a city-wide activation in the office, we do it with energy, intensity, and a lot of caffeine.
                          </p>
                      </div>
                      <div className="flex gap-12 pt-4">
                          <div>
                              <h4 className="text-4xl font-black text-primary">30+</h4>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Cities Covered</p>
                          </div>
                          <div>
                              <h4 className="text-4xl font-black text-gray-900 border-l border-gray-200 pl-12">200+</h4>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 pl-12">Team Members</p>
                          </div>
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4 pt-12">
                          <div className="rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/life1.png" width={400} height={500} alt="Culture 1" className="grayscale hover:grayscale-0 transition-all duration-700" /></div>
                          <div className="rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/life2.png" width={400} height={300} alt="Culture 2" className="grayscale hover:grayscale-0 transition-all duration-700 translate-x-4" /></div>
                      </div>
                      <div className="space-y-4">
                          <div className="rounded-[3rem] overflow-hidden shadow-2xl relative"><Image src="/life3.png" width={400} height={600} alt="Culture 3" className="grayscale hover:grayscale-0 transition-all duration-700" /></div>
                          <div className="rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/life1.png" width={400} height={400} alt="Culture 4" className="grayscale hover:grayscale-0 transition-all duration-700 -translate-x-4" /></div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* Culture Pillars */}
      <section className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-tight">Our Vibe Pillars</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm italic">The DNA of Vegavruddhi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              { title: "Collaborative Magic", desc: "No silos here. We share data, leads, and lunch with equal enthusiasm.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { title: "Radical Transparency", desc: "Open boards, real-time dashboards, and clear feedback loops.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              { title: "Agile Ownership", desc: "You own your territory. You lead your team. You deliver your growth.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center space-y-8">
                  <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-primary group-hover:bg-[#004d2c] group-hover:text-white transition-all duration-700 shadow-inner">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={pillar.icon} /></svg>
                  </div>
                  <div className="space-y-4">
                      <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight leading-none">{pillar.title}</h4>
                      <p className="text-base font-bold text-gray-400 group-hover:text-gray-600 transition-colors leading-relaxed px-2">{pillar.desc}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Life Moments */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-24 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">Wall of Fame</h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1400px] mx-auto px-4">
                {[
                    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80", title: "Annual Meetup 2024", desc: "Strategising growth and celebrating our collective journey." },
                    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", title: "Jaipur Office Vibes", desc: "Our creative nerve centre where big ideas take shape." },
                    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80", title: "Tech Strategy Jam", desc: "Architecting the future of execution with cutting-edge tech." },
                    { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80", title: "Festival Celebrations", desc: "One big family celebrating festivals with joy and inclusivity." },
                    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", title: "Our Support Pillars", desc: "The silent force driving excellence behind every operation." },
                    { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80", title: "Women in Vegavruddhi", desc: "Leading with impact and redefining leadership every day." },
                    { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80", title: "Collaborative Spirits", desc: "Synergy is our strength—working together across India." },
                    { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80", title: "Deep-Ground Activation", desc: "On-ground execution that turns strategy into real results." },
                    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80", title: "Learning & Development", desc: "Continuous upskilling to stay ahead in a dynamic market." }
                ].map((mom, i) => (
                    <div key={i} className="relative group rounded-[2.5rem] overflow-hidden break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700 mb-8 border border-gray-100 bg-gray-50">
                        <Image src={mom.src} width={500} height={800} alt={mom.title} className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#004d2c] via-[#004d2c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 space-y-2">
                            <h5 className="text-white text-xl font-black uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{mom.title}</h5>
                            <p className="text-white/80 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100 uppercase tracking-tighter leading-tight">{mom.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="py-24 bg-[#0a2318] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="container mx-auto px-4 relative z-10 text-center space-y-10">
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight">Seen enough? <br /><span className="text-primary italic">Join the movement.</span></h2>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link href="/career" className="bg-primary hover:bg-white hover:text-black text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl transition-all uppercase tracking-widest">Open Positions</Link>
                <Link href="/contact" className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black px-12 py-5 rounded-2xl font-black text-xl transition-all uppercase tracking-widest">Get in Touch</Link>
              </div>
          </div>
      </section>

      <StickyActions />
      <Footer />
    </div>
  );
}
