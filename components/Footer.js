import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a2318] text-gray-300 pt-20 pb-10 overflow-hidden font-medium">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">

          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white tracking-tight">Vegavruddhi Pvt. Ltd.</h3>
            <p className="leading-relaxed text-sm text-gray-400">
              Vegavruddhi Pvt. Ltd. is a multi-domain solutions company specializing in AI/ML-based technology products, large-scale ground operations, and sales enablement through the feet-on-street model.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/people/Vega-Vruddhi/61585550451125/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vega Vruddhi on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/vega.vruddhi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vega Vruddhi on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/vegavruddhi-pvt-ltd/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vega Vruddhi on LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-black text-white mb-8 tracking-tight">Quick Links</h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/career" className="hover:text-primary transition-colors">Career</Link></li>
              <li><Link href="/life" className="hover:text-primary transition-colors">Life at Vegavruddhi</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Our Partner</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-black text-white mb-8 tracking-tight">Contact Us</h3>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p>50, Vinayak Enclave, Jagatpura, Jaipur, Rajasthan – 302017</p>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p>7th Floor, Spaze Plazo, Golf Course Ext. Road Sector – 69, Gurugram, Haryana 122001</p>
              </div>
              <div className="flex gap-4">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <p>+91 91166 16636</p>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <p>saurabh@vegavruddhi.com</p>
              </div>
            </div>
          </div>

          {/* Column 4: Map */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-black text-white mb-8 tracking-tight uppercase">Our Office Location</h3>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-56 group relative bg-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.324838634568!2d77.0360501!3d28.3997063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23231e931b43%3A0xaa72301c6283d4cb!2sVegavruddhi%20Private%20Limited!5e0!3m2!1sen!2sin!4v1731566000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2318] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity pointer-events-none" />
              <Link
                href="https://maps.app.goo.gl/wjRSEsvLmJwJ9AD99"
                target="_blank"
                className="absolute bottom-4 left-4 right-4 bg-primary text-white py-3 rounded-xl text-xs font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-center uppercase tracking-widest"
              >
                Get Directions ↗
              </Link>
            </div>
            <p className="mt-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Spaze Plazo, Sector 69, Gurugram</p>
          </div>


        </div>

        {/* Footer Bottom */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
            Copyright © 2026 Vegavruddhi Pvt. Ltd. All Rights Reserved
          </p>
          <div className="flex gap-4">
            <Link href="/services" className="px-6 py-3 rounded-xl bg-white text-[#0a2318] font-black hover:bg-primary hover:text-white transition-all text-sm uppercase tracking-widest">
              Explore Our Services
            </Link>
            <Link href="/partners" className="px-6 py-3 rounded-xl border border-white/20 text-white font-black hover:bg-white hover:text-[#0a2318] transition-all text-sm uppercase tracking-widest">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
