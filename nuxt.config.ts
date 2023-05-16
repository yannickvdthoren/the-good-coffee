// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Indulge in the perfect cup with our specialty coffee guide, podcast, and journal - The Good Coffee create your ultimate coffee companions!",
        },
        {
          name: "image",
          content: "/images/the-good-coffee-banner-image.jpg",
        },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      brevoKey: process.env.BREVO_KEY,
    },
  },
  css: [
    "@/assets/css/reset.css",
    "@/assets/css/variables.css",
    "@/assets/css/global.css",
    "@/assets/css/fonts.css",
    "@/assets/css/article.css",
  ],
  modules: ["@nuxt/content"],
  content: {
    // My custom configuration
    locales: [
      {
        code: "nl",
        iso: "nl-NL",
        name: "Dutch",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
      },
      {
        code: "fr",
        iso: "fr-fr",
        name: "Français",
      },
    ],
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
});
