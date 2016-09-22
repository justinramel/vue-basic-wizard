<template>
  <div id="app">
    <wizard></wizard>
  </div>
</template>

<script>
import store from './store'
import Wizard from './components/Wizard'

export default {
  components: {
    Wizard
  },
  store
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -10px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

input, textarea {
  width: 100%;
  margin-bottom: 10px;
  display: block;
}
</style>
