// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "title", content: "The Good Coffee." },
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
        { name: "og:title", content: "The Good Coffee." },
        {
          name: "og:description",
          content:
            "Indulge in the perfect cup with our specialty coffee guide, podcast, and journal - The Good Coffee create your ultimate coffee companions!",
        },
        {
          name: "og:image",
          content: "/images/the-good-coffee-banner-image.jpg",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:author",
          content: "The Good Coffee.",
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
  modules: ["nuxt-content-assets", "@nuxt/content", "@nuxtjs/robots"],

  content: {
    documentDriven: true,
  },
});
