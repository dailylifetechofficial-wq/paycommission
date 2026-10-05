// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://8paycommission.com",
	integrations: [
		mdx(),
		sitemap({
			// Generate sitemap.xml for search engines and AdSense crawlers
			filter: (page) => !page.includes("/admin") && !page.includes("/private"),
			changefreq: "weekly",
			priority: 0.8,
			lastmod: new Date(),
			entryLimit: 45000, // Google sitemap limit
		}),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	// SEO & Performance optimizations
	output: "static",
	vite: {
		build: {
			minify: "terser",
		},
	},
});
