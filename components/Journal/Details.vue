<template>
  <aside>
    <h3>{{ props.title }}</h3>
    <address>
      <a :href="props.details.maps" target="_blank">
        {{ props.details.address }}
        <IconsExternal />
      </a>
    </address>
    <p>Open {{ props.details.opening }}</p>
    <ul>
      <li>
        <a :href="'mailto:' + props.details.email">{{ props.details.email }}</a>
      </li>
      <li>
        <a :href="props.details.website">{{ props.details.website }}</a>
      </li>
      <li>
        <a :href="'https://www.instagram.com' + props.details.instagram">
          @{{ props.details.instagram }}
        </a>
      </li>
    </ul>
  </aside>
</template>
<script setup>
const props = defineProps({
  title: String,
  details: Object,
});
</script>
<style scoped>
aside {
  padding: 24px;
  background: var(--lightestPink);
}
h3 {
  font-size: var(--lg);
  margin-bottom: 8px;
  color: var(--darkPink);
}
address,
p {
  font-size: var(--sm);
  color: var(--darkPink);
}
address {
  margin-bottom: 16px;
}
address a {
  display: inline-flex;
  align-items: baseline;
  color: var(--darkPink);
}
address svg {
  width: var(--sm);
  height: var(--sm);
}
ul li a {
  font-size: var(--sm);
  color: var(--blue);
}
@media (hover: hover) {
  ul li a:hover {
    color: var(--darkPink);
  }
}
</style>
