<template>
  <li class="date">
    <IconsDate />
    {{ date }}
  </li>
</template>
<script>
export default {
  name: "Card Date",
  props: { date: String },
};
</script>
<style></style>
