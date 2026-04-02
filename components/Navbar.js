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
            aria-label="Toggle mobile menu"
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
        className={`fixed inset-y-0 right-0 w-full bg-white z-[100] transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden overflow-y-auto shadow-2xl`}
      >
        <div className="flex flex-col px-6 pt-32 pb-24 min-h-screen">
          <div className="flex flex-col gap-6 text-xl tracking-wide font-black uppercase">
            <Link href="/" className="hover:text-primary transition-colors border-b border-gray-100 pb-4">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors border-b border-gray-100 pb-4">About Us</Link>
            
            <div className="flex flex-col border-b border-gray-100 pb-4">
              <button 
                type="button"
                className="flex items-center justify-between w-full hover:text-primary transition-colors py-1 cursor-pointer"
                onClick={() => setIsServicesOpen(prev => !prev)}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <svg className={`w-5 h-5 pointer-events-none transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-primary' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {/* Mobile Services Dropdown */}
              <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                {[
                  { name: "Managed Sales Process", href: "/service/managed-sales-process" },
                  { name: "Digital Lead Fulfilment", href: "/service/digital-lead-fulfilment-retail-audits" },
                  { name: "Activation Programmes", href: "/service/activation-partner-programmes" }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[13px] text-gray-600 hover:text-primary transition-colors pl-4 border-l-2 border-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/career" className="hover:text-primary transition-colors border-b border-gray-100 pb-4">Career</Link>
            <Link href="/life" className="hover:text-primary transition-colors border-b border-gray-100 pb-4">Life</Link>
            <Link href="/partners" className="hover:text-primary transition-colors border-b border-gray-100 pb-4">Partners</Link>
            <a 
              href="#enquiry" 
              className="hover:text-primary transition-colors border-b border-gray-100 pb-4"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (pathname !== "/") {
                  window.location.href = "/#enquiry";
                }
              }}
            >
              Contact
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <Link 
              href="/login" 
              className="w-full flex items-center justify-center bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all"
            >
              Login / Register
            </Link>
            <a 
              href="#enquiry" 
              className="md:hidden w-full flex items-center justify-center bg-primary hover:bg-accent text-white px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all"
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
        </div>
      </div>
    </nav>
  );
}
