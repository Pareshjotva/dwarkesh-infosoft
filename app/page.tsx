import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  Database,
  Globe2,
  Headset,
  LockKeyhole,
  Megaphone,
  MonitorCog,
  Network,
  Palette,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { site } from "@/lib/site";

const services = [
  { icon: Code2, title: "Web Design & Development", description: "Modern, responsive websites built around your business, your customers, and your next big idea." },
  { icon: TrendingUp, title: "SEO & Digital Marketing", description: "Get discovered by the right people with thoughtful SEO and marketing that is made to perform." },
  { icon: Headset, title: "Managed IT Support", description: "Reliable day-to-day technology support that keeps your team productive and connected." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Practical security guidance to protect your accounts, systems, and important business data." },
  { icon: Network, title: "Networking & Infrastructure", description: "Dependable network setup, Wi-Fi, and infrastructure for a workplace that runs smoothly." },
  { icon: Database, title: "Cloud & Business Solutions", description: "Smarter cloud services and business tools that bring your people and work together." },
];

const reasons = [
  { icon: Sparkles, title: "Solutions that fit", description: "Thoughtful recommendations tailored to your needs, goals, and budget." },
  { icon: Headset, title: "People who listen", description: "Clear communication and a friendly team you can actually talk to." },
  { icon: ShieldCheck, title: "Reliable by design", description: "A focus on dependable technology, security, and ongoing support." },
  { icon: BarChart3, title: "Built to grow", description: "Practical solutions that make room for your business’s next chapter." },
];

const latestPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Your trusted IT partner</span>
            <h1>Better tech.<br /><span>Better business.</span></h1>
            <p>From your first website to reliable day-to-day IT, we make technology work harder for your business.</p>
            <div className="hero-actions">
              <a className="button" href={site.whatsapp} target="_blank" rel="noreferrer">Let&apos;s talk about your project <ArrowUpRight size={16} /></a>
              <Link className="button button-light" href="/services">Explore our services <ArrowRight size={15} /></Link>
            </div>
            <div className="hero-note"><Check size={15} /> Friendly, practical IT support for growing businesses</div>
          </div>
          <div className="hero-visual" aria-label="A connected suite of business IT services" role="img">
            <div className="orbit" />
            <div className="service-node node-one"><Code2 size={17} /> Web development</div>
            <div className="service-node node-two"><LockKeyhole size={17} /> Cybersecurity</div>
            <div className="service-node node-three"><Megaphone size={17} /> SEO &amp; marketing</div>
            <div className="service-node node-four"><Headset size={17} /> IT support</div>
            <div className="visual-core"><MonitorCog size={39} /></div>
            <div className="stat-card"><Sparkles size={20} /><div><strong>All in one place</strong><span>Technology, thoughtfully connected</span></div></div>
          </div>
        </div>
      </section>

      <div className="trusted">
        <div className="container trusted-inner">
          <span className="trusted-label">Everything your business needs to do its best work.</span>
          <span className="trusted-item"><Code2 size={16} /> Web</span>
          <span className="trusted-item"><TrendingUp size={16} /> Search</span>
          <span className="trusted-item"><ShieldCheck size={16} /> Security</span>
          <span className="trusted-item"><Network size={16} /> Infrastructure</span>
          <span className="trusted-item"><Workflow size={16} /> Cloud</span>
        </div>
      </div>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What we do</span>
            <h2>One partner for all things IT.</h2>
            <p>Great technology should make work simpler. Find the practical digital and IT services your business needs to move forward.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, description }) => (
              <article className="service-card" key={title}>
                <span className="service-icon"><Icon size={21} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="text-link" href="/services">Explore service <ArrowRight size={14} /></Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 26 }}><Link className="text-link" href="/services">See all our services <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container why-grid">
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Why Dwarkesh Infosoft</span>
            <h2>Good people.<br />Thoughtful technology.</h2>
            <p>We believe great IT starts with understanding your business. Get a clear plan, dependable support, and a partner who keeps things refreshingly simple.</p>
            <div style={{ marginTop: 25 }}><Link className="button button-lime" href="/about">Get to know us <ArrowRight size={15} /></Link></div>
          </div>
          <div className="why-list">
            {reasons.map(({ icon: Icon, title, description }) => (
              <article className="why-item" key={title}>
                <Icon size={21} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">A better way to work together</span>
            <h2>From first chat to better tech.</h2>
            <p>No confusing jargon, no unnecessary complexity. Just a clear path to an IT solution that works for you.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card"><span className="step-number">01 — LISTEN</span><h3>We get to know you.</h3><p>Tell us what is working, what is not, and where you would like your business to go.</p></article>
            <article className="step-card"><span className="step-number">02 — PLAN</span><h3>A plan that makes sense.</h3><p>We recommend a straightforward solution that fits your goals, timeline, and budget.</p></article>
            <article className="step-card"><span className="step-number">03 — DELIVER</span><h3>We make it happen.</h3><p>Our team puts the right technology in place and stays by your side as you grow.</p></article>
          </div>
        </div>
      </section>

      <section className="section blog-preview">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Ideas worth sharing</span>
            <h2>A little more tech know-how.</h2>
            <p>Practical guides and friendly advice to help you make confident decisions about technology.</p>
          </div>
          <div className="post-grid">
            {latestPosts.map((post, index) => (
              <article className="post-card" key={post.slug}>
                <div className="post-art">{index === 0 ? <Globe2 size={36} /> : index === 1 ? <Code2 size={36} /> : <Palette size={36} />}</div>
                <div className="post-body">
                  <div className="post-meta"><span className="post-category">{post.category}</span><span>{post.readTime} min read</span></div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="text-link" href={`/blog/${post.slug}`}>Read article <ArrowRight size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 26 }}><Link className="text-link" href="/blog">Discover all 100 articles <ArrowDownRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div className="cta-content">
              <div><span className="eyebrow">Your next step starts here</span><h2>Let&apos;s make technology work for you.</h2><p>Have an idea or a problem to solve? We&apos;re just a message away.</p></div>
              <a className="button button-lime" href={site.whatsapp} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
