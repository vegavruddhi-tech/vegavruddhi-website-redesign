export default function StickyActions() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col gap-3 md:gap-4">
      <a href="https://wa.me/919928927887" className="bg-[#25D366] hover:scale-110 transition-transform p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.204-3.714l.353.21c1.472.873 3.166 1.334 4.896 1.335 5.176 0 9.387-4.211 9.39-9.39.002-2.51-.975-4.871-2.752-6.648-1.777-1.777-4.137-2.755-6.647-2.757-5.178 0-9.389 4.211-9.392 9.39-.001 1.838.533 3.626 1.542 5.177l.233.356-.993 3.628 3.71-.973z" />
        </svg>
      </a>
      <a href="tel:+919928927887" className="bg-primary hover:scale-110 transition-transform p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

    </div>
  );
}
