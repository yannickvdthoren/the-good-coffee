<template>
  <div class="wrap">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<style>
.wrap {
  margin: 0 auto;
  max-width: 1760px;
  padding: 0 32px;
}
</style>
