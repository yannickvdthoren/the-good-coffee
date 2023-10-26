<template>
  <header :class="{ white: headerbg }">
    <HeaderLogo class="header_logo" />
    <div class="header_menu" :class="{ show: isShowed }">
      <HeaderNav class="header_nav" @click="noBlock" />
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
      headerbg: false,
    };
  },
  methods: {
    showMenu() {
      document.body.classList.value.includes("block-scroll")
        ? document.body.classList.remove("block-scroll")
        : document.body.classList.add("block-scroll");

      return this.isShowed ? (this.isShowed = false) : (this.isShowed = true);
    },
    noBlock() {
      document.body.classList.remove("block-scroll");
    },
    changeHeaderBg() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          this.headerbg = true;
        } else {
          this.headerbg = false;
        }
      });
    },
  },
  mounted() {
    this.changeHeaderBg();
  },
};
</script>
<style scoped>
header {
  position: fixed;
  left: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "logo menu menu";
  align-items: center;
  width: 100%;
  padding: 32px;
}
header::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
}
header.white::before {
  animation: whiteBackground 0.3s ease-in-out forwards;
}
@keyframes whiteBackground {
  from {
    background: transparent;
  }
  to {
    background: var(--white);
  }
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
