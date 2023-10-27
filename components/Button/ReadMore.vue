<template>
  <span>
    <slot></slot>
    <IconsLink />
  </span>
</template>
<script>
export default {
  name: "Button Read More",
};
</script>
<style scoped>
span {
  display: inline-flex;
  flex-direction: column;
  gap: 0;
  font-size: var(--ml);
  letter-spacing: 0.25px;
}
span svg {
  width: 100%;
  height: auto;
  margin-top: -6px;
  color: var(--pink);
}
@media (hover: hover) {
  span:hover svg {
    color: var(--black);
  }
}
</style>
