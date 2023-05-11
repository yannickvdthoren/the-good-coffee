// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
export default defineNuxtConfig({
  css: [
    "@/assets/css/reset.css",
    "@/assets/css/variables.css",
    "@/assets/css/global.css",
    "@/assets/css/fonts.css",
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
