<template>
  <div class="wizard">
    <user v-if="step === 1"
          :next="handleNext"></user>
    <address v-if="step === 2"
             :next="handleNext"
             :prev="handlePrev"></address>
  </div>
</template>

<script>
import User from './User'
import Address from './Address'

export default {
  components: {
    User,
    Address
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    handleNext: function () {
      this.step = this.step + 1
    },
    handlePrev: function () {
      this.step = this.step - 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1 {
  color: #42b983;
}
</style>
