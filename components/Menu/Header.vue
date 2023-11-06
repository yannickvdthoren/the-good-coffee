<template>
  <nav>
    <ul>
      <li>
        <LinkPrimary link="/" type="nuxt"> Accueil </LinkPrimary>
      </li>
      <li>
        <LinkPrimary link="/journal" type="nuxt"> Journal </LinkPrimary>
      </li>
      <!-- <li>
        <a
          href="https://open.spotify.com/show/3hPsZTW9UdsHqlXqwbh05q?si=d01d548ea2ac479f"
          rel="noreferrer"
          >Talks</a
        >
      </li> -->
      <li>
        <LinkPrimary link="https://market.the-good-coffee.com">
          Marketplace
        </LinkPrimary>
      </li>
      <li>
        <LinkPrimary link="https://the-good-coffee-places.com/">
          Places
        </LinkPrimary>
      </li>
      <!-- <li>
        <nuxt-link to="/about">&Agrave; propos</nuxt-link>
      </li> -->
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Menu Header",
};
</script>
<style scoped>
ul {
  display: flex;
  gap: 24px;
}
@media screen and (max-width: 650px) {
  nav {
    width: 100%;
  }
  ul {
    flex-direction: column;
  }
  li a {
    display: block;
    padding-bottom: 16px;
  }
  li:last-child a {
    border: none;
  }
}
</style>
