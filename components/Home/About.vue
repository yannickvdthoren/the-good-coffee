<template>
  <section class="about" v-if="about">
    <ContentRenderer>
      <h2>{{ about.title }}</h2>
      <p v-html="about.description"></p>
      <nuxt-link :to="about.url" v-if="about.label"
        >{{ about.label }} <IconsArrow
      /></nuxt-link>
    </ContentRenderer>
  </section>
</template>
<script setup lang="ts">
const { data: about } = await useAsyncData("about-data", () =>
  queryContent("/en/homepage/about").findOne()
);
</script>
<style scoped>
@media screen and (max-width: 650px) {
  section {
    margin: 92px auto;
  }
  h2 {
    margin-bottom: 32px;
  }
  a {
    margin-top: 64px;
  }
}
@media screen and (min-width: 651px) {
  section {
    display: grid;
    margin: 224px auto;
    grid-template-columns: 40ch 50ch;
    align-items: flex-start;
    justify-content: center;
    gap: 32px 92px;
  }
  h2 {
    grid-area: 1/1/2/2;
  }
  p {
    grid-area: 1/2/3/3;
    font-size: var(--lg);
  }
  a {
    grid-area: 2/1/3/2;
  }
}
</style>
