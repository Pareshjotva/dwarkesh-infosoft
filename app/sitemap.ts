import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/contact", "/blog"];
  return [
    ...pages.map((page) => ({
      url: `${site.url}${page}`,
      changeFrequency: page === "/blog" ? ("daily" as const) : ("monthly" as const),
      priority: page === "" ? 1 : page === "/blog" ? 0.9 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
