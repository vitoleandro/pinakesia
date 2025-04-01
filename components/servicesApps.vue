<template>
  <section class="services-list">
    <span>Serviços Consultados:</span>
    <div class="wrap-list">
      <img src="logo_ccn.svg" alt="" height="45" />
      <img src="/logo_bibliodata.svg" alt="" height="45" />
      <img src="/logo_comut.svg" alt="" height="45" />
      <img src="/logo_base_integrada.svg" alt="" height="45" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services-list {
  width: 100%;
  background: white;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-top: 15px;
  padding: 8px;

  span {
    font-weight: 600;
    font-size: 0.75rem;
    opacity: 0.6;
  }
}

.wrap-list {
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
}
</style>
