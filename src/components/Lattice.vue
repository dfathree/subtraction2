<template>
  <div>
    <div class="sub1">{{ num1 }}</div>
    <div class="sub2">- {{ num2 }}</div>
    <div :style="show" class="answer">{{ answer }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AnswerVisibilityModule from '../store/answer'

interface Vs {
  vis: 'visible' | 'hidden'
}

@Component
export default class Lattice extends Vue {
  @Prop()
  private num1!: number

  @Prop()
  private num2!: number

  private get answer(): number {
    return this.num1 - this.num2
  }

  private get show() {
    return { visibility: AnswerVisibilityModule.visibility }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sub2 {
  border-bottom: 0.1rem black solid;
  margin-bottom: 0.4rem;
}
</style>
