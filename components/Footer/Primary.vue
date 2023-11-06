<template>
  <footer>
    <GridFooter class="top">
      <div class="business">
        <LogoPrimary class="logo" />
        <TextParagraph fontSize="var(--md)">
          Offrez-vous la tasse parfaite avec notre guide de café de spécialité,
          notre podcast et notre journal – The Good Coffee crée vos compagnons
          de café ultimes !
        </TextParagraph>
      </div>
      <div class="menu">
        <MenuFooter>
          <template v-slot:header> Websites </template>
          <template v-slot:list>
            <li>
              <a href="https://the-good-coffee-places.com/">
                The Good Coffee Places
              </a>
            </li>
            <li>
              <nuxt-link to="/journal">The Good Coffee Journal</nuxt-link>
            </li>
            <li>
              <a
                href="https://open.spotify.com/show/3hPsZTW9UdsHqlXqwbh05q?si=d01d548ea2ac479f"
              >
                The Good Coffee Talks
              </a>
            </li>
          </template>
        </MenuFooter>
        <MenuFooter>
          <template v-slot:header> Sitemap </template>
          <template v-slot:list>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><a href="">About</a></li>
            <li><a href="mailto:yannick@the-good-coffee.com">Contact</a></li>
          </template>
        </MenuFooter>
        <MenuFooter>
          <template v-slot:header> Contact </template>
          <template v-slot:list>
            <li>
              <a href="mailto:yannick@the-good-coffee.com">
                yannick@the-good-coffee.com
              </a>
            </li>
            <li>+32 495 85 80 88</li>
            <li><MenuSocial /></li>
          </template>
        </MenuFooter>
      </div>
    </GridFooter>
    <GridFooter class="bottom">
      <span class="copy">
        &copy 2023 All rights reserved to The Good Coffee.
      </span>
      <span class="credits">
        Made with love by
        <a href="https://littlejohntower.com">Little John Tower</a>
      </span>
    </GridFooter>
  </footer>
</template>
<style scoped>
footer {
  border-top: 1px solid var(--greenLight);
  padding-top: 56px;
}
.logo {
  max-width: 150px;
  height: auto;
  margin-bottom: 16px;
}
.copy {
  grid-area: copy;
  font-size: var(--sm);
}
.credits {
  grid-area: credits;
  font-size: var(--sm);
}
.business {
  grid-area: biz;
}
.menu {
  grid-area: menu;
}
.bottom {
  padding: 56px 0;
}
@media screen and (max-width: 650px) {
  .top {
    grid-template-areas: "biz biz biz biz biz biz" "menu menu menu menu menu menu";
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: calc(5 * var(--margin));
  }
  .bottom {
    grid-template-areas: "copy copy  copy copy copy copy" "credits credits credits credits credits credits";
    gap: 16px;
    justify-items: center;
  }
}
@media screen and (min-width: 651px) {
  .top {
    grid-template-areas: "biz biz . menu menu menu";
  }
  .menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(5 * var(--margin));
  }
  .bottom {
    grid-template-areas: "copy copy  . . credits credits";
  }
  .credits {
    justify-self: flex-end;
  }
}
</style>
