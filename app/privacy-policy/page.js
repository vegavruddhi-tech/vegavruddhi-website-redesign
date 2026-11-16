import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: "How Vegavruddhi Pvt. Ltd. collects, uses, stores, shares, and protects personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  ["1. Introduction", [
    'Welcome to Vegavruddhi Pvt. Ltd. ("Vegavruddhi", "Company", "we", "our", or "us").',
    "At Vegavruddhi, we value your privacy and are committed to protecting the personal information entrusted to us by our website visitors, clients, business partners, employees, job applicants, merchants, and other stakeholders.",
    "This Privacy Policy explains how we collect, use, process, store, share, and protect personal information when you visit our website, communicate with us, or engage with our services.",
    "By using our website, you acknowledge this Privacy Policy. Where consent is required by applicable law, we will request it separately."
  ]],
  ["2. Information We Collect", [
    "Depending on your interaction with Vegavruddhi, we may collect personal and contact information such as your name, telephone number, email address, address, company, designation, and professional details.",
    "We may collect business and professional information, including registration and identification details, merchant or retailer information, business requirements, service enquiries, partnership or vendor information, and information needed for customer acquisition, sales fulfilment, and activation programmes.",
    "For employment and recruitment, we may collect resumes, qualifications, employment history, professional experience, contact details, job preferences, and identity, attendance, or payroll information where required.",
    "When you access our website, we may collect technical information such as IP address, browser type, device information, pages visited, and website usage data through server logs, cookies, or analytics technologies. We collect only information reasonably necessary for the relevant purpose, subject to applicable law."
  ]],
  ["3. How We Use Your Information", [
    "We may use personal information to respond to enquiries; deliver sales enablement, merchant onboarding, customer acquisition, and field operations services; manage partnerships, client relationships, and vendors; process recruitment and employment activities; conduct authorised customer engagement and lead fulfilment; monitor operational performance; improve our website and services; send permitted communications; prevent fraud; protect our systems; and comply with legal obligations.",
    "We process personal data only for specified and lawful purposes and in accordance with applicable data protection requirements."
  ]],
  ["4. Information Sharing and Disclosure", [
    "Vegavruddhi does not sell personal information to unauthorised third parties.",
    "Where necessary and legally permitted, we may share information with corporate clients, business partners and vendors, technology service providers, professional advisers, and government or regulatory authorities. Where appropriate, we implement contractual and organisational safeguards to protect information shared with third parties."
  ]],
  ["5. Data Collection During Field Operations", [
    "As part of our sales enablement, merchant acquisition, retail activation, and customer engagement services, Vegavruddhi may collect and process information on behalf of corporate clients. This may include merchant contact details, business information, onboarding documentation, service preferences, and verification records.",
    "Collection and processing are limited to authorised business purposes and governed by applicable law, client agreements, and relevant privacy notices. Where we process personal data on behalf of a client, responsibilities are determined by applicable law and contractual arrangements."
  ]],
  ["6. Data Security", [
    "We implement reasonable technical and organisational safeguards designed to protect personal information against unauthorised access, disclosure, alteration, misuse, or loss. These may include access controls, secure systems, confidentiality obligations, and appropriate data-handling procedures.",
    "Although we take reasonable precautions, no method of electronic transmission or storage can be guaranteed to be completely secure."
  ]],
  ["7. Data Retention", [
    "We retain personal information only as long as reasonably necessary to fulfil the purposes for which it was collected, meet contractual requirements, resolve disputes, and comply with applicable legal obligations. When information is no longer required, we take appropriate steps to delete, anonymise, or securely dispose of it, subject to applicable retention requirements."
  ]],
  ["8. Cookies and Website Analytics", [
    "Our website may use cookies and similar technologies to support functionality, analyse visitor interactions, and improve user experience. Visitors may manage cookies through browser settings or available consent controls. Non-essential cookies requiring consent will be used only after obtaining the necessary consent."
  ]],
  ["9. Your Privacy Rights", [
    "Subject to applicable law and the commencement of relevant statutory provisions, you may have rights to request access to information about your personal data and its processing; request correction, completion, or updating; request erasure where legally applicable; withdraw consent for consent-based processing; raise grievances; and exercise other rights available under applicable data protection laws.",
    "To submit a privacy request, contact us using the details below. We may request reasonable information to verify your identity before processing a request."
  ]],
  ["10. Marketing Communications", [
    "Vegavruddhi may communicate about relevant services, business opportunities, partnerships, and promotions through email, telephone, SMS, WhatsApp, or other authorised channels. Where required, communications will be based on appropriate consent and comply with applicable regulations. Recipients may opt out using available unsubscribe mechanisms or by contacting us."
  ]],
  ["11. Third-Party Websites", [
    "Our website may link to external websites, platforms, or services. Vegavruddhi is not responsible for their privacy practices, security measures, or content. We encourage you to review their privacy policies before sharing personal information."
  ]],
  ["12. Children's Privacy", [
    "Our website and business services are not primarily directed towards children under 18. We do not knowingly collect children's personal information for marketing or customer acquisition without meeting applicable legal requirements. If we learn that children's information was processed inappropriately, we will take suitable corrective action."
  ]],
  ["13. International Data Processing", [
    "Where business operations or technology services involve processing personal information outside India, Vegavruddhi will take steps to comply with applicable Indian data protection laws and relevant cross-border transfer requirements."
  ]],
  ["14. Compliance with Applicable Laws", [
    "Vegavruddhi is committed to handling personal information in accordance with applicable Indian laws, including relevant provisions of the Digital Personal Data Protection Act, 2023, the Digital Personal Data Protection Rules, 2025, and other applicable regulations, as and when such provisions are in force.",
    "We periodically review our privacy practices to address regulatory requirements and changes in our business operations."
  ]],
  ["15. Changes to This Privacy Policy", [
    "We may update this Privacy Policy to reflect changes in our services, business practices, technology, or legal requirements. Any revised policy will be published here with an updated effective date. We encourage visitors to review this page periodically."
  ]]
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <header className="bg-[#0a2318] px-4 pb-20 pt-40 text-white md:pb-24">
          <div className="container mx-auto max-w-5xl">
            <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-green-200">Legal</span>
            <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">Privacy Policy</h1>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-300">How Vegavruddhi collects, uses, stores, shares, and protects your personal information.</p>
            <p className="mt-6 text-sm font-bold text-green-200">Effective date: 16 November 2026</p>
          </div>
        </header>
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
          <article className="space-y-10 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.18)] md:p-12">
            {sections.map(([title, paragraphs]) => (
              <section className="border-b border-gray-100 pb-10 last:border-0 last:pb-0" key={title}>
                <h2 className="mb-5 text-2xl font-black text-gray-900 md:text-3xl">{title}</h2>
                <div className="space-y-4 text-base font-medium leading-8 text-gray-600 md:text-lg">
                  {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            <section className="rounded-3xl bg-primary p-7 text-white md:p-10">
              <h2 className="text-2xl font-black md:text-3xl">Contact Us</h2>
              <p className="mt-4 leading-7 text-green-50">For privacy-related requests or questions, contact Vegavruddhi Pvt. Ltd.</p>
              <div className="mt-6 space-y-2 font-bold">
                <p><a className="underline underline-offset-4" href="mailto:saurabh@vegavruddhi.com">saurabh@vegavruddhi.com</a></p>
                <p><a className="underline underline-offset-4" href="tel:+919116616636">+91 91166 16636</a></p>
                <p>50, Vinayak Enclave, Jagatpura, Jaipur, Rajasthan – 302017</p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
