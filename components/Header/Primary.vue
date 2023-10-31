<template>
  <header :class="{ white: headerbg, show: isShowed }">
    <LinkPrimary link="/" @click="noBlock" class="logo">
      <LogoPrimary />
    </LinkPrimary>
    <div class="menu">
      <MenuHeader class="nav" @click="noBlock" />
      <MenuSocial class="social" />
    </div>
    <ButtonMenu class="mobileButton" @click="showMenu" :menuState="isShowed" />
  </header>
</template>
<script>
export default {
  name: "Header Primary",
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
  top: 0;
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
header.white::before,
.show::before {
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
.logo {
  grid-column: logo;
}
.logo svg {
  width: 130px;
  height: auto;
}
div {
  grid-column: menu;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.social {
  justify-self: end;
}
.mobileButton {
  display: none;
  grid-area: button;
}
@media screen and (max-width: 650px) {
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "logo button" "menu menu";
    padding: 24px 32px;
  }
  .menu {
    display: none;
    position: fixed;
    overflow: hidden;
    bottom: 100%;
    z-index: -1;
    transition: bottom 1s ease-in-out, z-index 0.1s ease-in-out;
  }
  .show .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 80px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding: 24px;
    background: var(--white);
  }
  .mobileButton {
    grid-column: 2/3;
    display: flex;
  }
}
</style>
