<template>
  <aside>
    <h4>{{ details.name }}</h4>
    <address>
      <a :href="details.maps" target="_blank">
        {{ details.address }}
        <IconsExternal />
      </a>
    </address>
    <p>Ouvert {{ details.opening }}</p>
    <ul>
      <li>
        <a :href="'mailto:' + details.email">{{ details.email }}</a>
      </li>
      <li>
        <a :href="details.website">{{ details.website }}</a>
      </li>
      <li>
        <a :href="'https://www.instagram.com' + details.instagram">
          @{{ details.instagram }}
        </a>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: "Journal details",
  props: {
    details: Object,
  },
};
</script>
<style scoped>
aside {
  padding: 24px;
  background: var(--lightestPink);
}
h4 {
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
