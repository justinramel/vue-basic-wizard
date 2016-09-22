<template>
  <div class="address">
    <h1>Result</h1>
    <textarea v-model="data" rows="10"></textarea>
    <button v-on:click="prevStep">Prev</button>
    <button v-on:click="reset">Reset</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({data: state => ({ user: state.user, address: state.address })})
  },
  methods: {
    ...mapActions(['prevStep', 'reset'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea {
    width: 500px
  }
</style>
