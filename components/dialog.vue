<template>
  <section class="dialog" :class="props.dialog.operator">
    <div class="user"></div>
    <div class="text">
      <p>
        {{ props.dialog.text }}
      </p>
      <div class="result" v-if="props.dialog.object">
        <Model3 v-for="(item, index) in props.dialog.object" :key="index" :result="item" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps(['dialog'])
</script>
<style lang="scss" scoped>
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

  .user {
    width: 48px;
    height: 48px;
    background: #f2f9ff;
    border-radius: 30px;
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
