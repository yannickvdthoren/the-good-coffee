<template>
  <ContentList
    :path="'/en/journal'"
    :sort="[{ date: -1 }]"
    @mouseenter="handleLoad('Couleur')"
    v-slot="{ list }"
  >
    <GridPrimary section="Une">
      <CardArticle
        :content="article"
        v-for="article in list.slice(0, 1)"
        :key="article._path"
        section="Une"
        :excerpt="true"
      />
    </GridPrimary>
  </ContentList>
</template>
<script>
import { useCookie } from "#app";

export default {
  name: "Home Une",
  data() {
    return {
      color: "",
    };
  },
  watch: {
    color(newColor) {
      // Watch if there is a # in the value of the journal that we get to setup the color
      if (newColor.background && newColor.background.includes("#")) {
        this.setupBackgroundColor(this.color.background);
      } else {
        this.setupBackgroundColor("#fff");
      }
    },
  },
  methods: {
    async loadColor() {
      // Get the last article in the journal folder & return the value
      const res = await useAsyncData("background", () =>
        queryContent("/en/journal").sort({ date: -1 }).limit(1).find()
      );
      return (this.color = res.data.value[0]);
    },
    setupBackgroundColor(backgroundColor) {
      // Modify the cookies with the color information
      const siteBackground = useCookie("siteBackground");
      siteBackground.value = backgroundColor;
    },
  },
  async created() {
    await this.loadColor();
  },
};
</script>
<style scoped>
.une {
  grid-column: span 4;
}
</style>
