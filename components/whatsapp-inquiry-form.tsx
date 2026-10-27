"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FormEvent } from "react";
import { site } from "@/lib/site";

export function WhatsAppInquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const inquiry = [
      `Hello Dwarkesh Infosoft! I'd like to enquire about your IT services.`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Project details: ${message}`,
    ].join("\n");

    window.open(`${site.whatsapp}?text=${encodeURIComponent(inquiry)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <span className="eyebrow">Tell us about it</span>
      <h2>Let&apos;s talk about your project.</h2>
      <p>Share a few details and we&apos;ll open a WhatsApp conversation with your enquiry ready to send.</p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Your name *</label>
          <input autoComplete="name" id="name" maxLength={100} name="name" placeholder="e.g. Alex Patel" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address *</label>
          <input autoComplete="email" id="email" maxLength={254} name="email" placeholder="you@company.com" required type="email" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone number *</label>
          <input autoComplete="tel" id="phone" inputMode="tel" maxLength={25} name="phone" placeholder="+91 98765 43210" required type="tel" />
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="service">What can we help with? *</label>
          <select defaultValue="" id="service" name="service" required>
            <option disabled value="">Choose a service</option>
            <option>Website design &amp; development</option>
            <option>SEO &amp; digital marketing</option>
            <option>IT support &amp; consulting</option>
            <option>Cybersecurity</option>
            <option>Cloud &amp; networking</option>
            <option>E-commerce</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="message">A little about your project *</label>
          <textarea id="message" maxLength={2000} name="message" placeholder="Tell us what you’re looking to achieve..." required />
        </div>
      </div>
      <button className="button" type="submit">Continue on WhatsApp <ArrowUpRight size={15} /></button>
      <p className="form-hint"><MessageCircle size={13} /> Your message goes directly to {site.displayPhone}. No details are stored on this website.</p>
    </form>
  );
}
