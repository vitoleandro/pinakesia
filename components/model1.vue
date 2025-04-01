<template>
  <section class="result-wrap">
    <div class="result-heading">
      <div class="result-heading__item">
        <span class="desc">Instituição</span>
        <span class="value">{{ result.biblioteca.instituicao }}</span>
      </div>
      <div class="result-heading__item">
        <span class="desc">Unidade</span>
        <span class="value">{{ result.biblioteca.unidade }}</span>
      </div>
      <div class="result-heading__item">
        <span class="desc">biblioteca</span>
        <span class="value">{{ result.biblioteca.denominacao }}</span>
      </div>
    </div>

    <div class="result-separator"></div>

    <v-expansion-panels flat>
      <v-expansion-panel class="pannel-item elevation-0">
        <v-expansion-panel-header>
          <span class="main-title">Coleções</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table @item-expanded="isExpanded" :headers="headers" :items="result.colecoes" :single-expand="singleExpand" :expanded.sync="expanded" show-expand>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <div class="result-heading" style="padding: 16px 0">
                  <div class="result-heading__item">
                    <span class="desc">Instituição</span>
                    <span class="value">{{ currentLibrary?.filiacao_instituicao.nome }}</span>
                  </div>
                  <div class="result-heading__item">
                    <span class="desc">Sigla</span>
                    <span class="value">{{ currentLibrary?.filiacao_instituicao.sigla }}</span>
                  </div>
                </div>
                <div class="result-heading">
                  <div class="result-heading__item">
                    <span class="desc">Endereço</span>
                    <span class="value">{{ currentLibrary?.endereco.logradouro }}</span>
                  </div>
                </div>
                <div class="result-heading">
                  <div class="result-heading__item">
                    <span class="desc">Teleofone</span>
                    <span class="value">{{ currentLibrary?.telefones }}</span>
                  </div>
                  <div class="result-heading__item">
                    <span class="desc">Email</span>
                    <span class="value">{{ currentLibrary?.emails }}</span>
                  </div>
                </div>
              </td>
            </template>
          </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script>
export default {
  name: 'Model1',
  props: {
    result: Object,
  },
  data() {
    return {
      expanded: [],
      singleExpand: true,
      currentLibrary: null,
      headers: [
        { text: 'Conteúdo', value: 'conteudo' },
        { text: '', value: 'data-table-expand' },
      ],
    }
  },

  methods: {
    async isExpanded({ event, item }) {
      this.currentLibrary = null
      let url = `https://bibliotecas.api.pinakesdev.com/api/bibliotecas-consulta/?apikey=1234&hash=47e441f495e936ec9de54cd148837a82&ts=1701086207&id=${item.biblioteca.id}`
      try {
        const res = await this.$axios.$get(url)
        this.currentLibrary = res[0]
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.result-wrap {
  background: white;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 12px;
}

.result-heading {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}

.result-heading__item {
  display: flex;
  flex-direction: column;
  flex: 1;

  .desc {
    color: #000000;
    opacity: 0.5;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
  }
  .value {
    font-weight: 500;
    font-size: 14px;
    color: #00a79d;
  }
}

.result-separator {
  display: inline-block;
  width: 100%;
  height: 2px;
  background: #f2f9ff;
}

.main-title {
  font-size: 14px;
  font-weight: 500;
  color: #00a79d;
}

.pannel-item {
  border: 2px solid #f2f9ff;
}

.table-text {
  font-size: 12px;
  color: #000000;
  opacity: 0.6;
}
</style>
