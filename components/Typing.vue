<template>
  <div class="typing">
    <p>{{ loadingText }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class TypingComponent extends Vue {
    @Prop({default: null})
    loadingText!:string
}
</script>

<style lang="scss">
.typing {
  //   display: inline-block;
  width: 100%;
  padding: 8px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);

  p {
    // display: inline;
    font-size: 12px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.2em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.1em; /* Adjust as needed */
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
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

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>