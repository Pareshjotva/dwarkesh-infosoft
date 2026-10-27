import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Dwarkesh Infosoft, your approachable partner for practical IT services, web development, SEO, and technology support for businesses.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: HeartHandshake, title: "People first", text: "Good technology starts with listening to the people who use it." },
  { icon: Compass, title: "Clear advice", text: "Straightforward recommendations, without unnecessary jargon." },
  { icon: ShieldCheck, title: "Built with care", text: "Thoughtful solutions that value reliability and security." },
  { icon: Sparkles, title: "Room to grow", text: "Practical choices that can evolve with your business." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">A little about us</span>
          <h1>Technology should help you get where you&apos;re going.</h1>
          <p>We make IT feel less complicated, helping businesses bring together the digital services and support they need to do their best work.</p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          <div className="about-art" aria-hidden="true"><Sparkles size={76} strokeWidth={1.2} /></div>
          <div className="about-copy">
            <span className="eyebrow">Dwarkesh Infosoft</span>
            <h2>A practical partner for all things IT.</h2>
            <p>Every business relies on technology, but finding the right tools and support is not always simple. Dwarkesh Infosoft brings web development, IT services, and digital expertise together in one approachable place.</p>
            <p>Whether you are launching a website, improving your online presence, or looking for dependable IT support, we believe the process should start with understanding what you need. We focus on clear conversations, practical solutions, and helping you make a confident next move.</p>
            <Link className="text-link" href="/contact">Let&apos;s start a conversation <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "#f5f6f1" }}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How we work</span>
            <h2>Good work starts with good principles.</h2>
            <p>From the first conversation through ongoing support, our approach is built around what matters to your business.</p>
          </div>
          <div className="service-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <span className="service-icon"><Icon size={21} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Check size={17} color="var(--green)" />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingBottom: 86 }}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-content">
              <div><span className="eyebrow">We&apos;re here to help</span><h2>What could better technology do for you?</h2><p>Tell us what you&apos;re working on and let&apos;s find out together.</p></div>
              <Link className="button button-lime" href="/contact">Get in touch <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: `About ${site.name}`,
        url: `${site.url}/about`,
        mainEntity: { "@type": "Organization", name: site.name, url: site.url, email: site.email, telephone: site.displayPhone },
      }) }} />
    </>
  );
}
