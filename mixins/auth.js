export default {
  data() {},
  methods: {

    // Redireciona para a tela de login
    // configurada no keyckloak.
    authRedirect(router, auth) {
      window.setTimeout(() => {
        // auth.login()
        router.push({ path: '/home' }) // TODO: Remove this after keyckloak fixed.
        console.log(auth.$state.loggedIn) // TODO: remover esta linha
      }, 3000)
    },
  },
}