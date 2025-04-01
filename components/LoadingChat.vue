<template>
  <section class="loading-wrap">
    <section class="loading-center">
      <v-progress-circular :size="20" color="primary" indeterminate></v-progress-circular>
    </section>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
}

.loading-center {
  padding: 8px;
  background: #f2f9ff;
  border-radius: 40px;

  span {
    font-size: 14px;
    font-weight: 700;
    color: #62a3d7;
  }
}
</style>
