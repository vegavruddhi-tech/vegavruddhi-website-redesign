"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);

  // Close mobile menu when route changes
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="container relative mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between z-[105]">
        <div className="flex items-center">
          <Link href="/" className="relative h-12 w-40 md:h-16 md:w-48 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Vegavruddhi Logo"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              priority
              unoptimized
              className="object-contain object-left md:object-center"
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
            onClick={(e) => {
              if (pathname !== "/") {
                e.preventDefault();
                window.location.href = "/#enquiry";
              }
            }}
          >
            Contact
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/login"
            className="hidden lg:flex items-center justify-center bg-primary hover:bg-black text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-[0.15em] transition-all shadow-xl hover:shadow-black/20 active:scale-95 leading-none"
          >
            Login / Register
          </Link>

          <a
            href="#enquiry"
            className="hidden md:flex items-center justify-center bg-primary hover:bg-accent text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-[0.15em] transition-all shadow-xl hover:shadow-accent/20 active:scale-95 leading-none"
            onClick={(e) => {
              if (pathname !== "/") {
                e.preventDefault();
                window.location.href = "/#enquiry";
              }
            }}
          >
            Enquiry Now
          </a>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            className="xl:hidden text-gray-900 focus:outline-none cursor-pointer relative z-[110] p-2"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8 font-black pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8 font-black pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-3xl z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } xl:hidden overflow-y-auto`}
      >
        <div className="flex flex-col px-8 pt-32 pb-16 min-h-screen">
          <div className="flex flex-col gap-6 text-2xl tracking-tight font-black uppercase text-gray-900">
            <Link
              href="/"
              className={`hover:text-primary transition-colors border-b border-gray-100/50 pb-5 flex items-center justify-between group ${isMobileMenuOpen ? 'animate-slide-top stagger-1 opacity-0' : ''}`}
            >
              <span>Home</span>
              <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
            </Link>

            <Link
              href="/about"
              className={`hover:text-primary transition-colors border-b border-gray-100/50 pb-5 flex items-center justify-between group ${isMobileMenuOpen ? 'animate-slide-top stagger-2 opacity-0' : ''}`}
            >
              <span>About Us</span>
              <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
            </Link>

            <div className={`flex flex-col border-b border-gray-100/50 pb-5 ${isMobileMenuOpen ? 'animate-slide-top stagger-3 opacity-0' : ''}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full hover:text-primary transition-colors py-1 cursor-pointer"
                onClick={() => setIsServicesOpen(prev => !prev)}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${isServicesOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'} transition-all`}>3 EXPANDED</span>
                  <svg className={`w-6 h-6 transition-transform duration-500 ${isServicesOpen ? 'rotate-180 text-primary' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>

              <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-500 ${isServicesOpen ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                {[
                  { name: "Managed Sales Process", href: "/service/managed-sales-process" },
                  { name: "Digital Lead Fulfilment", href: "/service/digital-lead-fulfilment-retail-audits" },
                  { name: "Activation Programmes", href: "/service/activation-partner-programmes" }
                ].map((item, idx) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-bold text-gray-500 hover:text-primary transition-all pl-6 border-l-2 border-gray-100 flex items-center justify-between group/item"
                  >
                    <span>{item.name}</span>
                    <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/career" className={`hover:text-primary transition-colors border-b border-gray-100/50 pb-5 flex items-center justify-between group ${isMobileMenuOpen ? 'animate-slide-top stagger-4 opacity-0' : ''}`}>
              <span>Career</span>
              <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
            </Link>

            <Link href="/life" className={`hover:text-primary transition-colors border-b border-gray-100/50 pb-5 flex items-center justify-between group ${isMobileMenuOpen ? 'animate-slide-top stagger-5 opacity-0' : ''}`}>
              <span>Life</span>
              <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
            </Link>

            <Link href="/partners" className={`hover:text-primary transition-colors border-b border-gray-100/50 pb-5 flex items-center justify-between group ${isMobileMenuOpen ? 'animate-slide-top stagger-6 opacity-0' : ''}`}>
              <span>Partners</span>
              <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
            </Link>

            <a
              href="#enquiry"
              className={`hover:text-primary transition-colors border-b border-gray-100/50 pb-5 flex items-center justify-between group ${isMobileMenuOpen ? 'animate-slide-top stagger-7 opacity-0' : ''}`}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (pathname !== "/") {
                  window.location.href = "/#enquiry";
                }
              }}
            >
              <span>Contact</span>
              <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
            </a>
          </div>

          <div className={`mt-10 flex flex-col gap-4 ${isMobileMenuOpen ? 'animate-slide-bottom stagger-8 opacity-0' : ''}`}>
            <Link
              href="/login"
              className="w-full flex items-center justify-center bg-gray-900 hover:bg-black text-white px-8 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl shadow-black/10 active:scale-[0.98]"
            >
              Login / Register
            </Link>
            <a
              href="#enquiry"
              className="w-full flex items-center justify-center bg-primary hover:bg-accent text-white px-8 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 active:scale-[0.98]"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (pathname !== "/") {
                  window.location.href = "/#enquiry";
                }
              }}
            >
              Enquiry Now
            </a>
          </div>

          {/* Mobile Footer Info */}
          <div className={`mt-auto pt-16 flex flex-col gap-8 ${isMobileMenuOpen ? 'animate-fade-in-up stagger-8 opacity-0' : ''}`}>
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Our Office</p>
              <p className="text-gray-600 font-bold text-sm leading-relaxed">
                Vegavruddhi Tech Solutions,<br />
                Pan-India Operations Headquarters
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="tel:+919116616636" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
              <a href="mailto:contact@vega.com" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
