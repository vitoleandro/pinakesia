<template>
  <div class="splash-wrap">
    <img class="marca" src="/marca1.png" alt="" height="300" />
    <h4>Seja Bem Vindo(a) ao Pinakes.ia</h4>
    <small>Em alguns instantes você será redirecionado para a autenticação ...</small>
    <v-progress-circular color="#f39200" indeterminate></v-progress-circular>
  </div>
</template>

<script>
import auth from '@/mixins/auth'
export default {
  name: 'index',
  mixins: [auth],
  data() {
    return {}
  },

  fetch() {
    this.authRedirect(this.$router, this.$auth)
  },
}
</script>
<style lang="scss" scoped>
.marca {
  margin-bottom: 1rem;
}

.splash-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 1rem;

  h4 {
    font-size: 1.6rem;
    padding-bottom: 0.5rem;
    color: #6ca6da;
  }
  small {
    font-size: 1rem;
    padding-bottom: 1.5rem;
    color: #6ca6da;
    opacity: 0.95;
  }
}
</style>
