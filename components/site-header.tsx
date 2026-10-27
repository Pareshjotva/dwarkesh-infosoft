"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Dwarkesh Infosoft home" onClick={() => setMenuOpen(false)}>
          <Image
            className="brand-logo"
            src="/logo.png"
            alt="Dwarkesh Infosoft original brand logo"
            width={1156}
            height={340}
            unoptimized
            priority
          />
        </Link>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`nav-links${menuOpen ? " nav-links-open" : ""}`} aria-label="Main navigation">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Home</Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="button" href={site.whatsapp} target="_blank" rel="noreferrer">
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}
