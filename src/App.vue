<template>
  <header></header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer></footer>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import '@/assets/scss/base/_modern-normalize';
@import '@/assets/scss/base/_default-settings';
main {
  margin: 30px auto;
}
</style>