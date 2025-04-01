<template>
  <v-container style="height: 100%">
    <v-row class="fill-height">
      <!-- <v-col md="3">
        <ServicesApps />
      </v-col> -->
      <v-col>
        <div class="page-format">
          <section class="form-wrap">
            <img src="/marca1.png" alt="" height="72px" />
            <section class="form-result">
              <LoadingChat v-if="isLoading" />
              <Result v-for="(item, index) in dialogs" :key="index" :dialogProps="item" />
            </section>
            <section class="form-search">
              <input type="text" v-model="sentence" v-on:keyup.enter="searchItem()" />
              <button @click="searchItem()">
                <img src="/find.svg" class="btn-img__find" alt="" />
              </button>
            </section>
          </section>
          <ServicesApps />
        </div>
      </v-col>
    </v-row>
    <v-row></v-row>
  </v-container>
</template>

<script>
import Result from '@/components/result'
import LoadingChat from '@/components/LoadingChat'
import chat from '@/mixins/chat'

export default {
  name: 'HomeIndex',
  components: { Result, LoadingChat },
  mixins: [chat],
  data() {
    return {}
  },

  mounted() {
    this.getWelcomeMsg()
  },

  methods: {},
}
</script>

<style lang="scss">
.form-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // height: calc(100vh - 200px);
  flex: 1;
  gap: 32px;
  overflow: hidden;
  padding: 16px 16px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.form-search {
  display: flex;
  flex-direction: row;
  width: 100%;
  background: white;
  border: 4px solid #6ca6da;
  border-radius: 8px;
  padding: 2px;
  transition: all 0.3s ease-in-out;

  input {
    flex: 1;
    height: 45px;
    padding: 0 0 0 16px;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    opacity: 0.68;
    letter-spacing: 0.1em;

    &:focus {
      outline: none;
    }
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(176, 208, 234, 0.35);
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 44px;
    border-radius: 4px;
    background: #6ca6da;
    margin: 0 0 0 4px;

    .btn-img__find {
      height: 28px;
    }
  }
}

.form-result {
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  gap: 16px;
  width: 100%;
  max-height: calc(100% - 30%);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
