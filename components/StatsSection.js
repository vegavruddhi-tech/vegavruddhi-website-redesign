"use client";

import React, { useEffect, useState, useRef } from "react";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    // Extract number from string like "30+" or "100Cr+"
    const endValue = parseInt(end.replace(/[^0-9]/g, ""), 10);
    const increment = endValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: "30+",
      label: "Cities",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      value: "200+",
      label: "Professionals",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      value: "100Cr+",
      label: "GMV",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: "25k+",
      label: "SMEs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      value: "100+",
      label: "Daily Engagements",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#fafafa]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,77,44,0.03)_0,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="section-label">Real Growth. Real Numbers.</div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            Empowering India's <br /><span className="text-primary italic">Growth Story</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Our numbers reflect the commitment we have towards building a scalable and impact-driven ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-10">
          {stats.map((stat, i) => {
            const numPart = stat.value.match(/[0-9]+/)?.[0] || "";
            const suffixPart = stat.value.replace(numPart, "");
            
            return (
              <div 
                key={i} 
                className="group relative flex flex-col items-center text-center p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white border border-gray-100/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-primary/20 transition-all duration-700 hover:-translate-y-2 md:hover:-translate-y-3 lg:col-span-1"
                style={{ gridColumn: i === 4 ? "1 / -1" : "auto" }}
              >
                {/* Decorative blob on hover */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col items-center space-y-4 md:space-y-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner -rotate-6 group-hover:rotate-0">
                    {React.cloneElement(stat.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                  </div>
                  
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">
                      <Counter end={stat.value} suffix={suffixPart} />
                    </h3>
                    <p className="text-[10px] md:text-[12px] font-black text-gray-400 uppercase tracking-widest md:tracking-[0.2em] group-hover:text-primary transition-colors leading-tight px-1 md:px-2">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 opacity-60">
          <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest italic font-serif text-center md:text-left">"Numbers don't lie, but passion drives them."</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Live Performance Data</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Real-Time Verification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
