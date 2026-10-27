# Dwarkesh Infosoft website

An English-language business website built with Next.js App Router, with service pages, contact details, a WhatsApp enquiry form, and 100 statically generated IT and business technology articles.

The original client-provided Dwarkesh Infosoft logo is preserved as `public/dwarkesh-infosoft-original.png`. Its trimmed version and matching peacock-feather favicon are generated directly from that original artwork.

## Run locally

Use Node.js 20.9 or later and npm:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Before deploying, set `NEXT_PUBLIC_SITE_URL` to the canonical public URL of the website; it is used for canonical metadata, structured data, `robots.txt`, and the sitemap. See `.env.example`.

## Validate and build

```bash
npm run typecheck
npm run lint
npm run build
```

Website enquiries are prepared in the visitor’s WhatsApp app and addressed to the business number configured in `lib/site.ts`. The contact form does not submit or store form details on a server.
