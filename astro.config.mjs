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
			// Generate sitemap.xml for search engines
			filter: (page) => !page.includes("/admin") && !page.includes("/private"),
			changefreq: "weekly",
			priority: 0.8,
			lastmod: new Date().toISOString().split('T')[0],
			entryLimit: 45000,
		}),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	// Output configuration for Cloudflare Pages
	output: "hybrid",
	outDir: "./dist",
	vite: {
		build: {
			minify: "terser",
		},
	},
});
