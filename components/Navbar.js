import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="relative h-16 w-48 transition-transform hover:scale-105 active:scale-95">
            <Image
              src="/logo.png"
              alt="Vegavruddhi Logo"
              fill
              sizes="192px"
              priority
              unoptimized
              className="object-contain"
            />
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-10">
          <Link href="/" className="text-[13px] font-black text-gray-800 hover:text-primary transition-all uppercase tracking-widest relative group">
            Home
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
          </Link>
          <Link href="/about" className="text-[13px] font-black text-gray-800 hover:text-primary transition-all uppercase tracking-widest relative group">
            About Us
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
          </Link>

          {/* Services Dropdown */}
          <div className="relative group/dropdown py-4">
            <Link
              href="/services"
              className="text-[13px] font-black text-gray-800 hover:text-primary transition-all uppercase tracking-widest flex items-center gap-1.5 group"
            >
              Services
              <svg className="w-3.5 h-3.5 group-hover/dropdown:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
            </Link>

            <div className="absolute top-full left-0 pt-1 opacity-0 !invisible group-hover/dropdown:opacity-100 group-hover/dropdown:!visible transition-all duration-300 translate-y-2 group-hover/dropdown:translate-y-0 z-[100]">
              <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-100 py-3 w-80 overflow-hidden">
                {[
                  { name: "Managed Sales Process", href: "/service/managed-sales-process" },
                  { name: "Digital Lead Fulfilment & Retail Audits", href: "/service/digital-lead-fulfilment-retail-audits" },
                  { name: "Activation & Partner Programmes", href: "/service/activation-partner-programmes" }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3.5 text-[12px] font-bold text-gray-700 hover:bg-slate-50 hover:text-accent transition-all border-b border-gray-50 last:border-0"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/career" className="text-[13px] font-black text-gray-800 hover:text-primary transition-all uppercase tracking-widest relative group">
            Career
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
          </Link>
          <Link href="/life" className="text-[13px] font-black text-gray-800 hover:text-primary transition-all uppercase tracking-widest relative group">
            Life
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
          </Link>
          <Link href="/partners" className="text-[13px] font-black text-gray-800 hover:text-primary transition-all uppercase tracking-widest relative group">
            Partners
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
          </Link>
          <a 
            href="#enquiry" 
            className="text-[13px] font-black text-gray-800 hover:text-primary transition-all uppercase tracking-widest relative group"
          >
            Contact
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden lg:flex items-center justify-center bg-primary hover:bg-black text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-[0.15em] transition-all shadow-xl hover:shadow-black/20 active:scale-95 leading-none"
          >
            Login / Register
          </Link>

          <a 
            href="#enquiry" 
            className="hidden md:flex items-center justify-center bg-primary hover:bg-accent text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-[0.15em] transition-all shadow-xl hover:shadow-accent/20 active:scale-95 leading-none"
          >
            Enquiry Now
          </a>

          {/* Mobile Menu Icon Placeholder */}
          <button className="xl:hidden text-gray-900 focus:outline-none">
            <svg className="w-8 h-8 font-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </nav>

  );
}
