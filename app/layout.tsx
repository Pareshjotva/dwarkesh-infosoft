import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dwarkesh Infosoft | IT Services, Web Development & SEO",
    template: "%s | Dwarkesh Infosoft",
  },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "IT services",
    "IT support",
    "web development",
    "SEO services",
    "digital marketing",
    "cybersecurity",
    "cloud services",
    "Dwarkesh Infosoft",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Dwarkesh Infosoft | Practical IT Services for Growing Businesses",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarkesh Infosoft | Practical IT Services for Growing Businesses",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.displayPhone,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.displayPhone,
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    serviceType: ["IT support", "Web development", "SEO", "Cybersecurity", "Cloud services"],
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
