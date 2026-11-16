import Link from "next/link";

const quickLinks = [
  ["Home", "/"], ["About Us", "/about"], ["Services", "/services"],
  ["Careers", "/career"], ["Life at Vegavruddhi", "/life"],
  ["Our Partners", "/partners"], ["Contact Us", "/#enquiry"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071f16] text-slate-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(22,163,74,0.16),transparent_34%),radial-gradient(circle_at_88%_90%,rgba(0,77,44,0.3),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative mx-auto px-6 pt-16 md:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 xl:grid-cols-12 xl:gap-10">
          <div className="xl:col-span-4">
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">Vegavruddhi Pvt. Ltd.</h2>
            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-slate-400">
              Building scalable growth through technology, managed field operations, and accountable sales execution across India.
            </p>
            <div className="mt-7 flex gap-3">
              <SocialLink href="https://www.facebook.com/profile.php?id=61585293143770" label="Facebook">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/vega.vruddhi/" label="Instagram">
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.5-8.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zm-1 15c0 .55-.45 1-1 1H6a1 1 0 01-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12z" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/vegavruddhi-pvt-ltd/posts/" label="LinkedIn">
                <path d="M6.5 8.5H3.4V19h3.1V8.5zM5 3A1.8 1.8 0 105 6.6 1.8 1.8 0 005 3zm14 10c0-3.2-1.7-4.7-4-4.7a3.5 3.5 0 00-3.1 1.7V8.5H8.8V19h3.1v-5.2c0-1.4.3-2.7 2-2.7s1.8 1.6 1.8 2.8V19H19v-6z" />
              </SocialLink>
            </div>
          </div>

          <div className="xl:col-span-2">
            <FooterTitle>Explore</FooterTitle>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 text-sm font-semibold md:grid-cols-1">
              {quickLinks.map(([label, href]) => <li key={label}><Link className="transition-colors hover:text-emerald-400" href={href}>{label}</Link></li>)}
            </ul>
          </div>

          <div className="xl:col-span-3">
            <FooterTitle>Contact</FooterTitle>
            <div className="mt-6 space-y-5 text-sm font-medium leading-6">
              <ContactRow icon="pin"><span>50, Vinayak Enclave, Jagatpura,<br />Jaipur, Rajasthan – 302017</span></ContactRow>
              <ContactRow icon="pin"><span>7th Floor, Spaze Plazo, Sector 69,<br />Gurugram, Haryana – 122001</span></ContactRow>
              <ContactRow icon="phone"><a className="hover:text-white" href="tel:+919116616636">+91 91166 16636</a></ContactRow>
              <ContactRow icon="mail"><a className="break-all hover:text-white" href="mailto:saurabh@vegavruddhi.com">saurabh@vegavruddhi.com</a></ContactRow>
            </div>
          </div>

          <div className="xl:col-span-3">
            <FooterTitle>Gurugram Office</FooterTitle>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">
              <div className="relative h-40 overflow-hidden rounded-xl">
                <iframe title="Vegavruddhi Gurugram office map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.324838634568!2d77.0360501!3d28.3997063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23231e931b43%3A0xaa72301c6283d4cb!2sVegavruddhi%20Private%20Limited!5e0!3m2!1sen!2sin!4v1731566000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
            <a href="https://maps.app.goo.gl/wjRSEsvLmJwJ9AD99" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 hover:text-white">Open in Google Maps <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-7 text-xs font-bold text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vegavruddhi Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/privacy-policy" className="text-slate-300 transition-colors hover:text-emerald-400">Privacy Policy</Link>
            <Link href="/#enquiry" className="text-slate-300 transition-colors hover:text-emerald-400">Contact</Link>
            <Link href="/services" className="rounded-full border border-white/15 px-5 py-2.5 text-white transition-all hover:border-emerald-400 hover:bg-emerald-400 hover:text-[#071f16]">Explore Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }) {
  return <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">{children}</h3>;
}

function SocialLink({ href, label, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-400 hover:text-[#071f16]"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">{children}</svg></a>;
}

function ContactRow({ icon, children }) {
  const paths = {
    pin: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21s7-5.1 7-12a7 7 0 10-14 0c0 6.9 7 12 7 12z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /></>,
    phone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h3l2 5-2 1.5a15 15 0 005.5 5.5L15 14l5 2v3a2 2 0 01-2 2C9.7 21 3 14.3 3 6a2 2 0 012-2z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9 6 9-6" /></>,
  };
  return <div className="flex gap-3"><svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">{paths[icon]}</svg><div>{children}</div></div>;
}
