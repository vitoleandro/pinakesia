<template>
  <div style="height: 100vh">
    <app-header v-if="$auth.$state.loggedIn"></app-header>
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 60px);
}
</style>
