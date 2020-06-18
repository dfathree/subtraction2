<template>
  <div>
    <div class="d-flex align-center mb-4 ml-10">
      <v-btn class="screen" @click="onClick">解答表示</v-btn>
      <div class="ml-10 form-select screen">
        <v-select label="行" @change="onRowChange" :items="[3, 4, 5, 6]" :value="row"></v-select>
      </div>
      <div class="ml-10 form-select screen">
        <v-select label="列" @change="onColChange" :items="[2, 3, 4, 5]" :value="col"></v-select>
      </div>
      <div class="ml-10 form-select screen">
        <v-select label="桁数" @change="onDigitChange" :items="[2, 3, 4, 5, 6]" :value="digit"></v-select>
      </div>
      <div class="ml-10 form-seed">
        <v-text-field label="Seed" @input="onSeedChange" :value="seed"></v-text-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { Component, Vue } from 'vue-property-decorator'
import AnswerVisibilityModule from '../store/answer'
import RandomModule from '../store/random'

@Component({
  name: 'Settings',
  components: {},
})
export default class Settings extends Vue {
  get row(): number {
    return RandomModule.row
  }

  get col(): number {
    return RandomModule.col
  }

  get digit(): number {
    return RandomModule.digit
  }

  get seed(): number {
    return RandomModule.seed
  }

  onClick() {
    AnswerVisibilityModule.toggle()
  }

  onRowChange(row: number) {
    RandomModule.setRow(row)
  }

  onColChange(col: number) {
    RandomModule.setCol(col)
  }

  onDigitChange(digit: number) {
    RandomModule.setDigit(digit)
  }

  onSeedChange(seed: number) {
    RandomModule.setSeed(seed)
  }

  mounted() {
    RandomModule.setSeed(Number(dayjs().format('YYYYMMDDHHmm')))
  }
}
</script>

<style scope>
.form-select {
  width: 6rem;
}
.form-seed {
  width: 10rem;
}
</style>
