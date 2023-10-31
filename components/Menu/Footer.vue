<template>
  <nav>
    <TextParagraph
      fontWeight="bold"
      fontFamily="var(--font-serif)"
      fontSize="var(--md)"
    >
      <slot name="header"></slot>
    </TextParagraph>
    <ul>
      <slot name="list"></slot>
    </ul>
  </nav>
</template>
<style scoped>
p {
  padding-bottom: 24px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
