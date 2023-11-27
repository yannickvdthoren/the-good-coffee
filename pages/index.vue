<template>
  <Title> Links | The Good Coffee </Title>
  <NuxtLayout name="blank">
    <section>
      <div class="details">
        <TextParagraph fontSize="var(--md)" fontFamily="var(--sans-serif)">
          Hey 👋 <br />
          Moi, c'est Yannick.
        </TextParagraph>
        <TextParagraph
          fontSize="var(--md)"
          fontFamily="var(--sans-serif)"
          fontWeight="400"
        >
          Je suis passionné de café et je suis en train de travailler sur le
          lancement d'une plateforme de vente de café éthique et de qualité.
        </TextParagraph>
        <TextParagraph
          fontSize="var(--md)"
          fontFamily="var(--sans-serif)"
          fontWeight="400"
        >
          Tu peux retrouver mes liens ci-dessous. <br />À la prochaine !
        </TextParagraph>
      </div>
      <ul class="links">
        <li>
          <LinkPrimary
            link="https://the-good-coffee.com/blogs/journal/pourquoi-mon-cafe-n-est-pas-bon"
          >
            Pourquoi mon café n'est pas bon ?
          </LinkPrimary>
        </li>
        <li>
          <LinkPrimary link="https://www.the-good-coffee.com/">
            The good coffee
          </LinkPrimary>
        </li>
        <li>
          <LinkPrimary link="https://the-good-coffee-places.com/">
            The good coffee places
          </LinkPrimary>
        </li>
      </ul>
      <MenuSocial class="social" />
      <LogoPrimary class="logo" />
    </section>
  </NuxtLayout>
</template>
<script>
export default {
  name: "links",
};
</script>
<style scoped>
section {
  display: grid;
  grid-template-areas: "title" "links" "links" "social" "logo";
  gap: 16px;
  align-content: space-between;
  justify-items: center;
  min-height: 100vh;
  padding: 32px 0;
}
.details {
  grid-area: title;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.links {
  grid-area: links;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.links a {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  color: var(--white);
  background: var(--green);
  border-radius: 50px;
}
.social {
  grid-area: social;
}
.logo {
  grid-area: logo;
  max-width: 150px;
  height: auto;
}
</style>
