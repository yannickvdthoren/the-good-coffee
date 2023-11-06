<template>
  <button>
    <slot />
  </button>
</template>
<style scoped>
button {
  padding: 16px 24px;
  color: var(--white);
  background: var(--blue);
  transition: color var(--ease), background var(--ease);
  border: 1.5px solid var(--blue);
  border-radius: 4px;
  cursor: pointer;
  font-size: var(--md);
  letter-spacing: 0.25px;
}
button:hover {
  color: var(--blue);
  background: transparent;
}
</style>
