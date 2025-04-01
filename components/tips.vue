<template>
  <section class="tips-wrap">
    <div class="tips-item bordered">Você tem a revista "Ciência da Informação"?</div>
    <div class="tips-item bordered bordered-left">Preciso de uma revista sobre "Algoritmos"</div>
    <div class="tips-item bordered-left">Preciso das informações da revista "Ciência da Informação" no formato Marc21 XML</div>
  </section>
</template>

<style lang="scss" scoped>
.tips-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 2px solid #f2f9ff;
  border-radius: 8px;

  .tips-item {
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #62a3d7;
    padding: 8px;

    &.bordered {
      border-bottom: 2px solid #f2f9ff;
    }
    &.bordered-left {
      border-left: 2px solid #f2f9ff;
    }
  }
}
</style>
