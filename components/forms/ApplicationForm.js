"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center space-y-6 h-full min-h-[500px]">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary animate-bounce">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-black text-white uppercase tracking-tight">Application Received!</h3>
        <p className="text-gray-400 font-medium max-w-sm">
          Thank you for your interest in Vegavruddhi. Our HR team will review your profile and get back to you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary font-black uppercase tracking-widest text-sm border-b-2 border-primary/20 hover:border-primary transition-all"
        >
          Send another application
        </button>
      </div>
    );
  }

  return (
    <div className="p-12 md:p-16 bg-white/5 backdrop-blur-sm border-l border-white/10 h-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
            <input
              required
              type="text"
              placeholder="John Doe"
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:bg-white/20 focus:border-primary text-white outline-none transition-all font-bold placeholder:text-gray-600"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <input
              required
              type="email"
              placeholder="john@example.com"
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:bg-white/20 focus:border-primary text-white outline-none transition-all font-bold placeholder:text-gray-600"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
            <input
              required
              type="tel"
              placeholder="+91 0000000000"
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:bg-white/20 focus:border-primary text-white outline-none transition-all font-bold placeholder:text-gray-600"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Current Location</label>
            <input
              required
              type="text"
              placeholder="City, State"
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:bg-white/20 focus:border-primary text-white outline-none transition-all font-bold placeholder:text-gray-600"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Position Interested In</label>
          <select
            required
            className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:bg-white/20 focus:border-primary text-white outline-none transition-all font-bold appearance-none"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          >
            <option value="" disabled className="bg-[#0a2318]">Select a role</option>
            <option value="Field Sales Executive" className="bg-[#0a2318]">Field Sales Executive</option>
            <option value="Team Leader" className="bg-[#0a2318]">Team Leader</option>
            <option value="Tele-caller" className="bg-[#0a2318]">Tele-caller</option>
            <option value="MIS Executive" className="bg-[#0a2318]">MIS Executive</option>
            <option value="HR & Training Manager" className="bg-[#0a2318]">HR & Training Manager</option>
            <option value="Other" className="bg-[#0a2318]">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Upload Resume (Google Drive Link / LinkedIn)</label>
          <input
            required
            type="text"
            placeholder="Link to your resume or LinkedIn profile"
            className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:bg-white/20 focus:border-primary text-white outline-none transition-all font-bold placeholder:text-gray-600"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-primary hover:bg-white hover:text-[#0a2318] text-white py-5 rounded-[1.5rem] font-black text-xl shadow-2xl transition-all uppercase tracking-widest mt-4 flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-6 w-6 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Submit Application →"
          )}
        </button>
        
        <p className="text-[10px] text-gray-500 font-bold text-center uppercase tracking-widest">
          By submitting, you agree to our recruitment terms and privacy policy.
        </p>
      </form>
    </div>
  );
}
