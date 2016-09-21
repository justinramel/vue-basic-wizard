<template>
  <div class="wizard">
    <user v-if="step === 1"
          :user="user"
          :next="handleNext"></user>
    <address v-if="step === 2"
             :address="address"
             :next="handleNext"
             :prev="handlePrev"></address>
    <result v-if="step === 3"
             :data="data()"
             :prev="handlePrev"
             :reset="handleReset"></result>
  </div>
</template>

<script>
import User from './User'
import Address from './Address'
import Result from './Result'

const INITIAL_STATE = {
  step: 1,
  user: {
    firstName: 'Justin',
    lastName: 'Ramel'
  },
  address: {
    line1: '1 Claremont Tower',
    postCode: 'NE1 7RU'
  }
}

export default {
  components: {
    User,
    Address,
    Result
  },
  data () {
    return INITIAL_STATE
  },
  methods: {
    data: function () {
      return JSON.stringify({ user: this.user, address: this.address }, null, 2)
    },
    handleNext: function () {
      this.step = this.step + 1
    },
    handlePrev: function () {
      this.step = this.step - 1
    },
    handleReset: function () {
      this.$data = INITIAL_STATE
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
