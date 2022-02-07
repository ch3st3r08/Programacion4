<template>
  <div id="app">
    <TeclasColor/>
  </div>
</template>

<script>
import TeclasColor from './components/TeclasColor.vue'

export default {
  name: 'App',
  components: {
    TeclasColor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
