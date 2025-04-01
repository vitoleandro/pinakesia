<template>
  <section class="result-wrap">
    <div class="result-heading">
      <div class="result-heading__item">
        <span class="desc">id</span>
        <span class="value">{{ props.result.id }}</span>
      </div>
      <!-- <div class="result-heading__item">
        <span class="desc">issn</span>
        <span class="value">{{ props.result.issns[0].descricao }}</span>
      </div> -->
      <div class="result-heading__item">
        <span class="desc">link de acesso</span>
        <a class="value" :href="props.result.link">clique aqui</a>
      </div>
    </div>
    <div class="result-separator"></div>

    <v-expansion-panels flat>
      <v-expansion-panel class="pannel-item elevation-0">
        <v-expansion-panel-header>
          <span class="main-title">{{ props.result.titulo_proprio }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-simple-table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in props.result.complementacoes_do_titulo" :key="index">
                <td class="table-text">{{ item.id }}</td>
                <td class="table-text">{{ item.tipo }}</td>
                <td class="table-text">{{ item.nome }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface ResultProps {
  result?: any
}

const props = defineProps<ResultProps>()
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
