// https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html
import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import nl from "../locales/nl.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "fr",
    messages: {
      en,
      fr,
      nl,
    },
  });

  vueApp.use(i18n);
});
