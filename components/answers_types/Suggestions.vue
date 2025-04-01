<template>
  <ul class="suggestions">
    <li v-for="(suggestion, index) in this.getSuggestions()" :key="index">{{ suggestion }}</li>
  </ul>
</template>

<script>
import chat from '@/mixins/chat'

export default {
  name: 'Suggestions',
  mixins: [chat],
  props: {
    result: Object,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.suggestions {
  background: White;
  border-radius: 4px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.03);
  padding: 1rem;
  li {
    list-style: none;
    padding-bottom: 0.8rem;
    color: #6ca6da;
    letter-spacing: 0.1em;
    font-size: 14px;
    font-weight: 500;

    &:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
