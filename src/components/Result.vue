<template>
  <div class="address">
    <h1>Result</h1>
    <textArea v-model="data" rows="10"></textarea>
    <button v-on:click="prev">Prev</button>
    <button v-on:click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  props: ['data', 'prev', 'reset']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  width: 500px
}
</style>
