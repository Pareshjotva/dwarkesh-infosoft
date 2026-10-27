import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Check, Clock3, Lightbulb } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { blogGuidance } from "@/lib/blog-guidance";
import { site } from "@/lib/site";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      siteName: site.name,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((entry) => entry.category === post.category && entry.slug !== post.slug)
    .slice(0, 3);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    articleSection: post.category,
    timeRequired: `PT${post.readTime}M`,
    inLanguage: "en",
  };

  return (
    <article className="article-wrap">
      <nav className="article-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{post.category}</span>
      </nav>
      <header className="article-header">
        <span className="eyebrow">{post.category}</span>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <div className="article-meta"><span>By the {site.name} team</span><span><Clock3 size={13} style={{ verticalAlign: "middle", marginRight: 4 }} />{post.readTime} min read</span><span><BookOpen size={13} style={{ verticalAlign: "middle", marginRight: 4 }} />Practical business guide</span></div>
      </header>
      <div className="article-cover" aria-hidden="true"><Lightbulb size={66} strokeWidth={1.2} /></div>
      <div className="article-content">
        <p>{post.excerpt} This guide shares some useful questions and practical steps to help you make informed decisions for your business.</p>
        {blogGuidance[post.category].map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <div className="article-callout">
          <h2 style={{ marginTop: 0 }}>Your next steps</h2>
          <ul>
            <li><Check size={15} />Write down the specific problem or opportunity you want to address.</li>
            <li><Check size={15} />Talk to the people who will use or be affected by the solution.</li>
            <li><Check size={15} />Compare options against your needs, resources, and priorities.</li>
            <li><Check size={15} />Choose one practical action and review how well it works.</li>
          </ul>
        </div>
        <h2>Make the right next move for your business</h2>
        <p>Good technology decisions are grounded in real business needs. Take time to understand your options, ask questions, and choose a path that feels manageable for your team.</p>
        <p>Need help with {post.category.toLowerCase()}? <Link href="/contact" style={{ color: "var(--green)", fontWeight: 700 }}>Talk to Dwarkesh Infosoft about your project.</Link></p>
      </div>
      <div style={{ marginTop: 39, paddingTop: 23, borderTop: "1px solid var(--line)" }}>
        <Link className="text-link" href="/blog"><ArrowLeft size={14} /> Back to all articles</Link>
      </div>
      <section style={{ marginTop: 52 }}>
        <span className="eyebrow">Keep exploring</span>
        <h2 style={{ margin: "13px 0 20px", fontFamily: "var(--font-display)", fontSize: 25 }}>More on {post.category}</h2>
        <div className="footer-links">
          {relatedPosts.map((related) => <Link className="text-link" href={`/blog/${related.slug}`} key={related.slug}>{related.title} <ArrowRight size={14} /></Link>)}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
    </article>
  );
}
