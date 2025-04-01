<template>
  <div class="file-item">
    <span>A Revista do AviSite</span>
    <v-btn rounded small color="#00a79d">
      Marc21XML
      <v-icon>mdi-download-outline</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Mark21Download',
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
.file-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem;
  border-bottom: 2px solid #b0d0ea;
  background: #ffffff;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    opacity: 0.68;
    letter-spacing: 0.1em;
  }
}
</style>
