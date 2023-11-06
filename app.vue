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
export default {
  name: "App",
  async setup() {
    const res = await useAsyncData("background", () =>
      queryContent("/").sort({ date: -1 }).limit(1).find()
    );
    return { res };
  },
  created() {
    this.backgroundColor = this.res.data.value[0].background;
  },
};
</script>
