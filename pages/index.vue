<template>
  <NuxtLayout>
    <SectionMarketBanner class="marketBanner" />
    <SectionUne class="une" />
    <SectionJournal class="journal" />
  </NuxtLayout>
</template>
<script>
export default {
  name: "index",
};
</script>
<style scoped>
.une {
  order: 1;
}
.marketBanner {
  order: 2;
}
.journal {
  order: 3;
}
</style>
