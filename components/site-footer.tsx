import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link className="brand" href="/">
              <Image
                className="brand-logo"
                src="/logo.png"
                alt="Dwarkesh Infosoft original brand logo"
                width={1156}
                height={340}
                unoptimized
              />
            </Link>
            <p>Thoughtful technology, reliable IT support, and digital services to help your business move forward.</p>
            <a className="text-link" href={site.whatsapp} target="_blank" rel="noreferrer">Chat with our team <ArrowUpRight size={14} /></a>
          </div>
          <div>
            <h2 className="footer-heading">Explore</h2>
            <div className="footer-links">
              <Link href="/services">Our services</Link>
              <Link href="/about">About Dwarkesh Infosoft</Link>
              <Link href="/blog">IT insights &amp; blog</Link>
              <Link href="/contact">Contact our team</Link>
            </div>
          </div>
          <div>
            <h2 className="footer-heading">Get in touch</h2>
            <div className="footer-links">
              <a href={`tel:${site.phone}`}>{site.displayPhone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">Message us on WhatsApp</a>
              <span>IT services for businesses</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Dwarkesh Infosoft. All rights reserved.</span>
          <span>Practical IT solutions for a smarter business.</span>
        </div>
      </div>
    </footer>
  );
}
