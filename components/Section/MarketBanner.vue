<template>
  <GridSecondary section="marketBanner">
    <div class="banner">
      <TextH1
        textAlign="center"
        color="var(--darkPink)"
        fontSize="var(--ml)"
        textTransform="uppercase"
        fontFamily="var(--sans-serif)"
        letterSpacing="0.25px"
        class="title"
      >
        Achetez du café éthique et de qualité sur notre marketpalce
      </TextH1>
      <BannerRoasters />
      <LinkPrimary link="https://market.the-good-coffee.com/" class="link">
        <ButtonReadMore maxWidth="15ch">Acheter du bon café</ButtonReadMore>
      </LinkPrimary>
    </div>
  </GridSecondary>
</template>
<script>
export default {
  name: "Section Market Banner",
};
</script>
<style scoped>
.banner {
  grid-column: 1 / span 4;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;
  margin-top: -15vh;
  padding: 64px 100px;
  background: white;
  border-radius: 8px;
  box-shadow: var(--shadow);
}
@media screen and (max-width: 650px) {
  .banner {
    padding: 32px 48px;
  }
}
</style>
