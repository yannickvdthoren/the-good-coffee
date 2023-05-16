<template>
  <footer>
    <section class="footer_bck">
      <div>
        <HeaderLogo />
        <p>
          Indulge in the perfect cup with our specialty coffee guide, podcast,
          and journal - The Good Coffee create your ultimate coffee companions!
        </p>
        <!-- <AppNewsletter :lite="true" /> -->
      </div>
      <FooterNav>
        <template v-slot:header> Websites </template>
        <template v-slot:list>
          <li>
            <a href="https://the-good-coffee-places.com/">
              The Good Coffee Places
            </a>
          </li>
          <li><nuxt-link to="/journal">The Good Coffee Journal</nuxt-link></li>
          <li>
            <a
              href="https://open.spotify.com/show/3hPsZTW9UdsHqlXqwbh05q?si=d01d548ea2ac479f"
            >
              The Good Coffee Talks
            </a>
          </li>
        </template>
      </FooterNav>
      <FooterNav>
        <template v-slot:header> Sitemap </template>
        <template v-slot:list>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <!-- <li><a href="">About</a></li> -->
          <li><a href="mailto:yannick@the-good-coffee.com">Contact</a></li>
        </template>
      </FooterNav>
      <FooterNav>
        <template v-slot:header> Contact </template>
        <template v-slot:list>
          <li>32, rue de Tervaete, BE-1040 Etterbeek</li>
          <li>
            <a href="mailto:yannick@the-good-coffee.com"
              >yannick@the-good-coffee.com</a
            >
          </li>
          <li>+32 495 85 80 88</li>
          <li><FooterSocial /></li>
        </template>
      </FooterNav>
    </section>
    <span class="copy">&copy 2023 All rights reserved to The Good Coffee.</span>
    <!-- <form>
      <label for="locale-select">{{ $t("language") }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="nl">nl</option>
      </select>
    </form> -->
  </footer>
</template>
<style scoped>
@media screen and (max-width: 650px) {
  section::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background: var(--blue);
  }
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 64px 0;
    color: var(--white);
  }
  p {
    padding-top: 16px;
    font-size: var(--sm);
  }
  a,
  li {
    color: var(--white);
    font-size: var(--sm);
  }

  .copy {
    display: block;
    padding: 32px 0;
    font-size: var(--sm);
  }
}
@media screen and (min-width: 651px) {
  section::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background: var(--blue);
  }
  section {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 64px 0;
    color: var(--white);
  }
  p {
    max-width: 60ch;
    padding: 32px 0 24px;
    font-size: var(--sm);
  }
  a,
  li {
    color: var(--white);
    font-size: var(--sm);
  }

  .copy {
    display: block;
    padding: 32px 0;
    font-size: var(--sm);
  }
}
</style>
