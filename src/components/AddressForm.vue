<template>
  <div class="address-form">
    <h1>Address</h1>
    <form>
      <label>Line 1
        <input type="text" placeholder="1 Claremont Tower" v-model="address.line1" />
      </label>
      <label>Post Code
        <input type="text" placeholder="NE1 7RU" v-model="address.postCode" />
      </label>
    </form>
    <button v-on:click="nextStep">Next</button>
    <button v-on:click="prevStep">Prev</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({ address: state => state.address })
  },
  methods: {
    ...mapActions(['nextStep', 'prevStep'])
  }
}
</script>
