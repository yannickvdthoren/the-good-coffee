<template>
  <nav>
    <p>
      <slot name="header"></slot>
    </p>
    <ul>
      <slot name="list"></slot>
    </ul>
  </nav>
</template>
<style scoped>
p {
  padding-bottom: 24px;
  font-family: var(--font-serif);
}
ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
