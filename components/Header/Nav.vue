<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
      </li>
      <li><nuxt-link to="/journal">Journal</nuxt-link></li>
      <li>
        <a
          href="https://open.spotify.com/show/3hPsZTW9UdsHqlXqwbh05q?si=d01d548ea2ac479f"
          rel="noreferrer"
          >Talks</a
        >
      </li>
      <li><a href="https://the-good-coffee-places.com/">Places</a></li>
      <li>
        <!-- <nuxt-link to="/about">{{ $t("about") }}</nuxt-link> -->
      </li>
    </ul>
  </nav>
</template>
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
    border-bottom: 1px solid var(--pink);
  }
  li:last-child a {
    border: none;
  }
}
</style>
