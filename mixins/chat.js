export default {
  data() {
    return {
      dialogs: [],
      isLoading: false,
      isSuggestion: false,
      sentence: '',
    }
  },

  methods: {

    getWelcomeMsg() {
      this.dialogs.unshift({ id: 1, operator: 'bot', type: 'asd', text: 'Olá, seja bem vindo a pesquisa do IBICT. Em que posso lhe ajudar ?' })
    },

    getSuggestions() {
      return [
        'Você tem a revista Ciência da Informação?',
        'Gostaria das revistas mais recentes relacionadas ao tema Medicina',
        'Preciso das informações da revista Ciência da Informação no formato Marc21 XML'
      ]
    },

    async searchItem() {
      this.isloading = true
      let text = this.sentence
      if (this.sentence == '') {
        this.dialogs.unshift({ operator: 'bot', type: '', text: 'Ok, você não me enviou informações, tente novamente.' })
        this.isloading = false
      } else if (this.sentence.toLowerCase().search('sugestão') >= 0) {
        this.dialogs.unshift({ operator: 'user', type: 'suggestion', text: this.sentence })
        this.sentence = ''
        setTimeout(() => {
          this.dialogs.unshift({ operator: 'bot', type: 'suggestion', text: 'Ok, logo abaixo você pode ver algumas sugestões de pesquisa.', object: [] })
        }, 1500)
      } else {
        setTimeout(() => {
          this.dialogs.unshift({ operator: 'user', type: '', text: text })
          this.sentence = ''
          this.isloading = false
        }, 2000)
        this.isloading = true
        setTimeout(() => {
          // this.getResponse(text)
        }, 3000)
      }
    },

    async getResponse(text) {
      this.isLoading = true
      try {
        const res = await this.$axios.get('https://pinakesia.api.pinakesdev.com/consulta', { params: { question: text } })
        console.log(res)
        if (res.data.object) {
          this.dialogs.unshift({ operator: 'bot', type: res.data.type, text: res.data.text, object: res.data.object })
        } else {
          this.dialogs.unshift({ operator: 'bot', type: '', text: res.data.type, object: res.data.object })
        }

        this.isLoading = false
      } catch (err) {
        const { response } = err
        this.isLoading = false
        this.dialogs.unshift({ operator: 'bot', type: 'asd', text: 'Ocorreu um erro, tente novamente !' })

        if (response.status === 403) {
          this.$auth.login()
        }
      }
    },
  },
}
