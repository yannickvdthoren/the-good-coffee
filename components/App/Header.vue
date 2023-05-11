<template>
  <header>
    <HeaderLogo class="header_logo" />
    <div class="header_menu" :class="{ show: isShowed }">
      <HeaderNav class="header_nav" />
      <HeaderSocial class="header_social" />
    </div>
    <HeaderMobileButton
      class="header_mobileButton"
      @click="showMenu"
      :menuState="isShowed"
    />
  </header>
</template>
<script>
export default {
  data() {
    return {
      isShowed: false,
    };
  },
  methods: {
    showMenu() {
      document.body.classList.value.includes("block-scroll")
        ? document.body.classList.remove("block-scroll")
        : document.body.classList.add("block-scroll");
      document.documentElement.classList.value.includes("block-scroll")
        ? document.documentElement.classList.remove("block-scroll")
        : document.documentElement.classList.add("block-scroll");
      return this.isShowed ? (this.isShowed = false) : (this.isShowed = true);
    },
  },
};
</script>
<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "logo menu menu";
  align-items: center;
  padding: 32px 0;
}
header::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: var(--lightPink);
}
.header_logo {
  grid-column: logo;
}
div {
  grid-column: menu;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.header_social {
  justify-self: end;
}
.header_mobileButton {
  display: none;
  grid-area: button;
}
@media screen and (max-width: 651px) {
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "logo button" "menu menu";
  }
  .header_menu {
    display: none;
    position: fixed;
    overflow: hidden;
    bottom: 100%;
    z-index: -1;
    transition: bottom 1s ease-in-out, z-index 0.1s ease-in-out;
  }
  .header_menu.show {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 80px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding: 24px;
    background: var(--lightPink);
  }
  .header_mobileButton {
    grid-column: 2/3;
    display: flex;
  }
}
</style>
