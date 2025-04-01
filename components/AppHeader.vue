<template>
  <header id="app-header">
    <img class="marca" src="/marca1.png" alt="" />
    <section class="aciton-side">
      <img src="/logo_ibict.png" class="ibict-logo" alt="" />
      <img src="/logo_ministerio.png" class="ibict-logo" alt="" />
      <img src="/logo_governo.png" class="governo-logo" alt="" />
      <v-btn plain x-smallc color="primary" @click="$auth.logout()">sair</v-btn>
    </section>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
#app-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  width: 100vw;
  height: 60px;
  background: linear-gradient(to right, #8cccff 50%, #338fd8);

  .marca {
    height: 86px;
  }

  .aciton-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 60px;
    gap: 12px;
    flex: 1;

    .ibict-logo {
      height: 70px;
    }

    .governo-logo {
      height: 50px;
    }
  }
}
</style>
