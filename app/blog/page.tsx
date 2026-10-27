import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Cloud, Code2, Database, Globe2, Headset, LockKeyhole, Megaphone, Network, Palette, ShoppingBag } from "lucide-react";
import { blogCategories, blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "IT, SEO & Business Technology Blog",
  description:
    "Explore 100 practical articles about IT services, web development, cybersecurity, SEO, digital marketing, cloud computing, networking, and business technology.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "100 Practical IT & Business Technology Guides",
    description: "Explore 100 guides on IT, web development, SEO, cybersecurity, cloud services, and more.",
    url: "/blog",
  },
};

const categoryIcons = [Code2, Globe2, Megaphone, LockKeyhole, Headset, Cloud, Network, Database, ShoppingBag, BarChart3, Palette];
const categoryIcon = (category: string) => {
  const index = blogCategories.indexOf(category) % categoryIcons.length;
  const Icon = categoryIcons[index];
  return <Icon size={30} />;
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">The Dwarkesh Infosoft blog</span>
          <h1>Smarter ideas for better business technology.</h1>
          <p>Explore practical, plain-English guides to IT, websites, search, security, and the technology that keeps businesses moving.</p>
        </div>
      </section>
      <section className="blog-listing">
        <div className="container">
          <p className="blog-count">Browse <strong>{blogPosts.length} practical guides</strong> across {blogCategories.length} topics</p>
          <div className="blog-all-grid">
            {blogPosts.map((post) => (
              <article className="post-card" key={post.slug}>
                <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                  <div className="post-art">{categoryIcon(post.category)}</div>
                  <div className="post-body">
                    <div className="post-meta"><span className="post-category">{post.category}</span><span>{post.readTime} min read</span></div>
                    <h2 style={{ margin: "15px 0 9px", fontFamily: "var(--font-display)", fontSize: 15, letterSpacing: "-.035em", lineHeight: 1.4 }}>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <span className="text-link">Read article <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
