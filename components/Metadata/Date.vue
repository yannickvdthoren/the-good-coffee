<template>
  <li :class="size">
    <IconsDate />
    <span>
      {{ transformDate(date) }}
    </span>
  </li>
</template>
<script>
export default {
  name: "Metadata Date",
  props: { date: String, size: String },
  methods: {
    transformDate(date) {
      const months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      const theDate = new Date(date);
      const month = theDate.getMonth();
      const year = theDate.getFullYear();
      const day = theDate.getDate();

      return `${day} ${months[month]} ${year}`;
    },
  },
};
</script>
<style scoped>
li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-weight: 600;
}
.lg li {
  gap: var(--md);
}
.lg svg {
  width: var(--lg);
  height: var(--lg);
}
.lg span {
  font-size: var(--md);
}
</style>
