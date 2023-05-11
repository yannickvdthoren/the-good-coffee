<template>
  <footer>
    <section class="footer_bck">
      <div>
        <HeaderLogo />
        <p>
          Think of cheeseburgers like a Tinder match. They might not all be your
          soulmate but you’ve gotta find out to be sure. It can get a little
          messy and that’s just part of the fun.
        </p>
        <!-- <FooterNewsletter /> -->
      </div>
      <FooterNav>
        <template v-slot:header> Websites </template>
        <template v-slot:list>
          <li><a href="">The Good Coffee Places</a></li>
          <li><a href="">The Good Coffee Journal</a></li>
          <li><a href="">The Good Coffee Talks</a></li>
        </template>
      </FooterNav>
      <FooterNav>
        <template v-slot:header> Sitemap </template>
        <template v-slot:list>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
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
