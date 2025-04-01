<template></template>
<script>
export default {
  name: 'Generic',
  props: {
    dialogProps: Object,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.dialog {
  gap: 8px;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  &.bot {
    flex-direction: row;
  }
  &.user {
    flex-direction: row-reverse;
  }

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 30px;

    &.user {
      background: #f2f9ff;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #f2f9ff;
    border-radius: 8px;
    padding: 16px;

    p {
      text-align: justify;
      font-size: 14px;
      font-weight: 500;
      color: #000000;
      opacity: 0.68;
      letter-spacing: 0.1em;
    }
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.result {
  padding: 16px;
}
</style>
