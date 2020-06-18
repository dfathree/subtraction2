<template>
  <div>
    <div v-for="(row, rowIndex) in items" :key="rowIndex" class="d-flex justify-space-around s-row">
      <div v-for="(col, colIndex) in row" :key="colIndex" class="text-right">
        <lattice :num1="col[0]" :num2="col[1]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Lattice from '../components/Lattice.vue'
import RandomModule from '../store/random'
import { RandomNumbers } from '../store/types'

@Component({
  name: 'Home',
  components: {
    Lattice,
  },
})
export default class Home extends Vue {
  get items(): RandomNumbers {
    return RandomModule.randomNumbers
  }
}
</script>

<style scope>
.s-row {
  margin-bottom: 7rem;
  font-size: 2.1rem;
  line-height: 2.1rem;
}
</style>
