<template>
  <header class="header">
    <HeaderNav />
  </header>

  <main class="main">
    <MainContainer />
  </main>
</template>

<script>
import MainContainer from './components/MainContainer.vue';
import HeaderNav from './components/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    MainContainer
  }
}
</script>

<style scoped lang="scss">
.main {
  border-radius: 8px;
  max-width: 600px;
  margin: 16px auto;
  overflow: hidden;

  @media #{$mobile} {
    border-radius: 0;
    margin: 0;
    max-width: 100%;
  }
}
</style>
