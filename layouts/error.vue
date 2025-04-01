<template>
  <!-- <v-app> -->
  <main class="error-wrap">
    <section class="error-message__box">
      <img src="/marca2.png" alt="" height="300" />
      <h2>Ocorreu um erro !</h2>
      <small>Clique no botão abaixo para ser redirecionado</small>
      <v-btn rounded depressed color="#8cccff" @click="redirect()">Redirecionar</v-btn>
    </section>
  </main>
  <!-- <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink> -->
  <!-- </v-app> -->
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not lorem',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },

  methods: {
    redirect() {
      this.$router.push({ path: '/home' })
    },
  },
}
</script>

<style scoped lang="scss">
.error-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  background: #f2f9ff;
}

.error-message__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  min-height: 150px;

  h2 {
    color: #338fd8;
    padding: 1rem;
  }

  small {
    color: #000000;
    opacity: 0.5;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
