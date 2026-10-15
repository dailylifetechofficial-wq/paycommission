# Canonical SEO normalization and verification

This project keeps one canonical URL pattern for all pages: `https://8paycommission.com` without a trailing slash on page routes, except the root `/`.

## Why
Google may treat URL variants as duplicates when page metadata and sitemap disagree. Normalizing canonical URLs avoids Google choosing a different canonical page than the one you intend.

## Rule
- Root URL: `https://8paycommission.com/`
- All other pages: `https://8paycommission.com/page-name`
- Never mix with `/page-name/` for the same page.

## Quick verification
```bash
curl -sSL https://8paycommission.com/fitment-factor-8th-pay-commission | grep -i 'canonical'
curl -I https://8paycommission.com/fitment-factor-8th-pay-commission
curl -I https://8paycommission.com/ads.txt
```

## Search Console follow-up
- Submit `https://8paycommission.com/sitemap-index.xml`
- Use URL Inspection for the preferred URL and the variant Google currently shows.
- Request indexing after deployment.
