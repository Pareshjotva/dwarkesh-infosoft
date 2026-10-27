import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  Database,
  Headset,
  LockKeyhole,
  Megaphone,
  MonitorCog,
  Network,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Services for Growing Businesses",
  description:
    "Explore Dwarkesh Infosoft services: web development, SEO, digital marketing, IT support, cybersecurity, cloud computing, networking, e-commerce, and consulting.",
  alternates: { canonical: "/services" },
};

const serviceDetails = [
  { icon: Code2, title: "Web Design & Development", description: "Build a fast, mobile-friendly website that tells your story, earns trust, and gives customers a clear next step.", items: ["Business and company websites", "Responsive web design", "Website improvements and maintenance"] },
  { icon: BarChart3, title: "SEO & Digital Marketing", description: "Help the right customers find you with useful content and a well-rounded search and digital marketing approach.", items: ["Search engine optimisation", "Local SEO and business listings", "Content and digital marketing guidance"] },
  { icon: Headset, title: "Managed IT Support", description: "Keep your people and technology moving with approachable IT support that fits your day-to-day operations.", items: ["IT help and troubleshooting", "Business technology maintenance", "Practical IT planning and advice"] },
  { icon: LockKeyhole, title: "Cybersecurity", description: "Make security a practical part of how you work, from the accounts your team uses to the data you rely on.", items: ["Security reviews and guidance", "Account and access best practices", "Backup and security awareness planning"] },
  { icon: Network, title: "Networking & Infrastructure", description: "Create a connected and dependable workplace with network services designed for your team and environment.", items: ["Business network setup and planning", "Office Wi-Fi and connectivity", "Network troubleshooting and improvements"] },
  { icon: Database, title: "Cloud Services & Business Email", description: "Make it easier for your people to access tools, email, and shared work wherever business takes them.", items: ["Cloud services planning", "Professional business email", "Cloud storage and migration guidance"] },
  { icon: ShoppingBag, title: "E-commerce Solutions", description: "Bring your products online with a store that helps customers browse, choose, and buy with confidence.", items: ["E-commerce website development", "Online store improvements", "Product and shopping experience guidance"] },
  { icon: Megaphone, title: "Branding & Online Presence", description: "Present a consistent, professional business online with an identity and digital experience that feels like you.", items: ["Brand and business website guidance", "Content and online presence planning", "Social and digital channel coordination"] },
  { icon: MonitorCog, title: "IT Consulting & Technology Planning", description: "Make considered technology decisions with clear advice based on the way your business actually operates.", items: ["IT assessments and roadmaps", "Technology and software selection", "Business process improvement planning"] },
  { icon: Workflow, title: "Business Automation", description: "Spend less time repeating routine tasks by finding the right processes and tools to streamline your work.", items: ["Workflow review and planning", "Business software and integrations", "Practical automation opportunities"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>IT services that make business simpler.</h1>
          <p>From the website your customers see to the systems your team depends on, find practical IT and digital support in one place.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-detail">
            {serviceDetails.map(({ icon: Icon, title, description, items }) => (
              <article className="service-detail-card" key={title}>
                <span className="service-icon"><Icon size={21} /></span>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>{items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-content">
              <div><span className="eyebrow">Not sure where to start?</span><h2>Tell us what you need.</h2><p>We&apos;ll help you find a practical next step for your business.</p></div>
              <Link className="button button-lime" href="/contact">Talk to our team <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${site.name} IT services`,
        itemListElement: serviceDetails.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.description,
        })),
      }) }} />
    </>
  );
}
