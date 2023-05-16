<template>
  <section class="hero" v-if="hero">
    <ContentRenderer>
      <div class="hero_details">
        <IconsLogo v-if="hero.title === 'logo'" class="logo" />
        <h1 v-else>{{ hero.title }}</h1>
        <p>{{ hero.description }}</p>
        <AppButton v-if="hero.button">{{ hero.button }}</AppButton>
      </div>
      <picture>
        <img
          src="~/assets/images/homepage/illustration.png"
          :alt="hero.imageAlt"
        />
      </picture>
    </ContentRenderer>
  </section>
</template>
<script setup lang="ts">
const { data: hero } = await useAsyncData("hero-data", () =>
  queryContent("/en/homepage/hero").findOne()
);
</script>
<style scoped>
section::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: var(--lightPink);
}
picture img {
  object-fit: cover;
}
@media screen and (max-width: 650px) {
  section {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    gap: 32px;
    min-height: calc(100vh - 98px);
    height: 100%;
  }
  section::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("~/assets/images/homepage/blob.svg");
    background-repeat: no-repeat;
    background-size: 160%;
    background-position-x: 29%;
    background-position-y: -29%;
    margin-right: var(--full-bleed);
  }
  .logo {
    width: 260px;
    height: auto;
  }
  picture {
    position: relative;
    flex: 1 1 20ch;
    margin-left: auto;
    overflow: visible;
  }

  .hero_details {
    flex: 1 1 20ch;
    padding: 24px 0;
  }
  p {
    margin: 32px 0;
    font-size: var(--lg);
  }
}
@media screen and (min-width: 651px) {
  section {
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 32px;
    height: 100%;
    max-height: calc(100vh - 116px);
    min-height: calc(100vh - 116px);
  }
  section::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    width: 1110px;
    height: 922px;
    background-image: url("~/assets/images/homepage/blob.svg");
    background-repeat: no-repeat;
    background-size: 150%;
    background-position-x: 15%;
    background-position-y: 15%;
    margin-right: var(--full-bleed);
  }
  .hero_details {
    max-width: 60ch;
    padding: 120px 0;
  }
  .logo {
    max-width: 625px;
  }
  p {
    margin: 32px 0;
    font-size: var(--ml);
  }
  picture {
    flex: 1 0 40ch;
    max-width: 900px;
    max-height: calc(100vh - 116px);
    margin-left: auto;
  }
}
</style>
