<template>
  <v-app>
    <v-main>
      <settings />
      <home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Settings from './views/Settings.vue'
import Home from './views/Home.vue'

@Component({
  name: 'App',
  components: {
    Settings,
    Home,
  },
})
export default class App extends Vue {}
</script>
