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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      value: "100+",
      label: "Daily Engagements",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <div className="section-label">Our Real-World Impact</div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight uppercase leading-tight">
            Scale That <span className="text-primary italic">Matters.</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => {
            const numPart = stat.value.match(/[0-9]+/)?.[0] || "";
            const suffixPart = stat.value.replace(numPart, "");
            
            return (
              <div 
                key={i} 
                className="group relative p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-[2.5rem]" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner rotate-3 group-hover:rotate-0">
                    {stat.icon}
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
                      <Counter end={stat.value} suffix={suffixPart} />
                    </span>
                  </div>
                  
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-400 font-medium italic">
            "Driven by data, powered by execution, proven by results."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
