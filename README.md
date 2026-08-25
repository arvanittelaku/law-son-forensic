# Lawson Forensic

Production website for [lawsonforensic.com](https://www.lawsonforensic.com): U.S. boutique forensic accounting and expert witness services.

## Stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS
- Static site; contact form → n8n webhook via `/api/submit-lead`
- GDPR cookie consent with Google Consent Mode

## Setup

```bash
npm install
cp .env.example .env.local
```

Set `Lead_notification_url` for the n8n contact webhook and optionally `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

For local webhook testing, use **`netlify dev`** (often `http://localhost:8888`) so `/api/submit-lead` routes to the Netlify function.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (default: https://www.lawsonforensic.com) |
| `Lead_notification_url` | n8n webhook URL; outbound JSON includes `domain` + `Brand name` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (loaded only after consent) |
| `GOOGLE_SITE_VERIFICATION` | Search Console |
| `BING_SITE_VERIFICATION` | Bing Webmaster |

Domain canonicalization (apex ↔ www) is handled by Netlify's Primary domain setting.

SEO files: `npm run seo:generate` writes `public/sitemap.xml` and `public/robots.txt`. See `docs/SEO.md` and `docs/SEO-ARCHITECTURE.md`.

## Contact form webhook

On submit, the contact form **POST**s to **`/api/submit-lead`**, which forwards to **`Lead_notification_url`** with:

`Full Name`, `Email`, `Phone Number`, `Brand name` (`Lawson Forensic`), and `domain` (from `NEXT_PUBLIC_SITE_URL`, www stripped).

See **`Lead_notification_setup.md`** for the full cross-project spec.
