<template>
  <section class="dialog" :class="dialogProps.operator">
    <div class="avatar" :class="dialogProps.operator">
      <img src="/marca3.png" alt="" height="58" v-if="dialogProps.operator == 'bot'" />
    </div>
    <div class="text">
      <p>{{ dialogProps.text }}</p>
      <p>{{ dialogProps?.object?.texto }}</p>
      <div class="result" v-if="dialogProps?.object">
        <!-- <div v-if="dialogProps.type === answers_type.title">
          <Model2 v-for="(item, index) in dialogProps.object" :key="index" :result="item" />
        </div>
        <div v-if="dialogProps.type === answers_type.subject">
          <Model2 v-for="(item, index) in dialogProps.object" :key="index" :result="item" />
        </div>
        <div v-if="dialogProps.type === answers_type.mark21">
          <Mark21Download v-for="(item, index) in dialogProps.object" :key="index" :result="{}" />
        </div> -->
        <div v-if="dialogProps.type === answers_type.suggestion">
          <Suggestions :result="{}" />
        </div>
      </div>
      <!-- <p v-if="!dialogProps.object == []">{{ dialogProps?.type }}</p> -->
    </div>
  </section>
</template>
<script>
import model1 from '@/components/model1'
import model2 from '@/components/model2'
import { ANSWERS_TYPE } from '@/models/answers.type'
import Mark21Download from '@/components/answers_types/Mark21Download'
import Suggestions from '@/components/answers_types/Suggestions'

export default {
  name: 'HomeIndex',
  components: { model1, model2, Mark21Download, Suggestions },
  props: {
    dialogProps: Object,
  },
  data() {
    return {
      answers_type: ANSWERS_TYPE,
    }
  },
}
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
