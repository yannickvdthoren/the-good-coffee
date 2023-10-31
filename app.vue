<template>
  <Head>
    <Title>the good coffee.</Title>
  </Head>
  <div
    class="wrap"
    :style="{
      backgroundColor: backgroundColor,
    }"
  >
    <NuxtPage />
  </div>
</template>
<script>
import { useCookie } from "#app";

export default {
  name: "App",
  data() {
    return {
      backgroundColor: "",
    };
  },
  created() {
    // Get the cookie (setup in Une.vue) with the color information and set the color to the background
    const siteBackground = useCookie("siteBackground");
    this.backgroundColor = siteBackground.value;
  },
};
</script>
