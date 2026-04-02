import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Vegavruddhi | IT & Business Consultation Services",
    template: "%s | Vegavruddhi"
  },
  description: "Vegavruddhi Pvt. Ltd. offers end-to-end Sales, Staffing & Customer Engagement Solutions to accelerate your business growth. Expert IT & Business consultation services in India.",
  keywords: ["Vegavruddhi", "Business Consultation", "IT Services", "Staffing Solutions", "Sales Process Management", "Customer Engagement", "Digital Lead Fulfilment", "Retail Audits", "India Business Services"],
  authors: [{ name: "Vegavruddhi" }],
  creator: "Vegavruddhi",
  publisher: "Vegavruddhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vegavruddhi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vegavruddhi | IT & Business Consultation Services",
    description: "Accelerate your business growth with Vegavruddhi's end-to-end Sales, Staffing & Customer Engagement Solutions.",
    url: "https://vegavruddhi.com",
    siteName: "Vegavruddhi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vegavruddhi Business Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vegavruddhi | IT & Business Consultation Services",
    description: "Accelerate your business growth with Vegavruddhi's end-to-end Sales, Staffing & Customer Engagement Solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
