<template>
  <HeaderPrimary />
  <main>
    <slot></slot>
  </main>
  <FooterPrimary />
</template>
<script>
export default {
  name: "Layout default",
};
</script>
<style>
.wrap {
  overflow-x: hidden;
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 var(--wrap-margin);
}
.wrap::before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-left: var(--full-bleed);
  background: inherit;
  z-index: -1;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 1761px) {
  .wrap {
    overflow-x: visible;
  }
}
</style>
