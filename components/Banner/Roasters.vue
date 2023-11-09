<template>
  <ul>
    <CardRoaster
      :content="roaster"
      v-for="(roaster, index) in roasters"
      :key="'roaster-' + index"
    />
  </ul>
</template>
<script>
export default {
  name: "Banner Roasters",
  data() {
    return {
      roasters: [
        {
          name: "Gust",
          address: "Brussels, Belgium",
          image: "/images/gust.png",
          alt: "Image",
        },
        {
          name: "Way",
          address: "Gent, Belgium",
          image: "/images/way.png",
          alt: "Image",
        },
        {
          name: "Naga",
          address: "Rixensart, Belgium",
          image: "/images/naga.png",
          alt: "Image",
        },
        {
          name: "Mok Coffee",
          address: "Leuven, Belgium",
          image: "/images/mok.png",
          alt: "Image",
        },
        {
          name: "Wide Awake",
          address: "Brussels, Belgium",
          image: "/images/wide.png",
          alt: "Image",
        },
        {
          name: "Black Potion",
          address: "Brussels, Belgium",
          image: "/images/black.png",
          alt: "Image",
        },
      ],
    };
  },
};
</script>
<style scoped>
ul {
  display: flex;
  gap: calc(5 * var(--margin));
  justify-content: center;
  width: 100vw;
}
@media screen and (max-width: 650px) {
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: calc(2 * var(--margin));
    justify-content: center;
    width: 100vw;
  }
}
</style>
