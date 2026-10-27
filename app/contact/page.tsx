import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { WhatsAppInquiryForm } from "@/components/whatsapp-inquiry-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Our IT Services Team",
  description:
    "Contact Dwarkesh Infosoft about IT services, web development, SEO, and business technology. Call, email, or send an enquiry directly on WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Let&apos;s connect</span>
          <h1>Tell us what you have in mind.</h1>
          <p>Whether you have a clear project or just a question, we&apos;re happy to help. Reach out in the way that works for you.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="eyebrow">Contact details</span>
            <h2>We&apos;re one message away.</h2>
            <p>Speak with Dwarkesh Infosoft about your project, IT support, or any of the services we provide.</p>
            <div className="contact-method">
              <span className="contact-icon"><Phone size={18} /></span>
              <div><strong>Call us</strong><a href={`tel:${site.phone}`}>{site.displayPhone}</a></div>
            </div>
            <div className="contact-method">
              <span className="contact-icon"><MessageCircle size={18} /></span>
              <div><strong>WhatsApp us</strong><a href={site.whatsapp} target="_blank" rel="noreferrer">Chat with our team</a></div>
            </div>
            <div className="contact-method">
              <span className="contact-icon"><Mail size={18} /></span>
              <div><strong>Email us</strong><a href={`mailto:${site.email}`}>{site.email}</a></div>
            </div>
            <div className="contact-method">
              <span className="contact-icon"><MapPin size={18} /></span>
              <div><strong>How we work</strong><span>IT services for businesses, wherever you work.</span></div>
            </div>
            <div className="contact-method">
              <span className="contact-icon"><ShieldCheck size={18} /></span>
              <div><strong>Your privacy</strong><span>Your enquiry stays between you and our team.</span></div>
            </div>
          </div>
          <WhatsAppInquiryForm />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: `Contact ${site.name}`,
        url: `${site.url}/contact`,
        mainEntity: { "@type": "Organization", name: site.name, email: site.email, telephone: site.displayPhone, contactPoint: { "@type": "ContactPoint", telephone: site.displayPhone, contactType: "customer service", availableLanguage: "English" } },
      }) }} />
    </>
  );
}
