<template>
  <div class="wizard">
    <h2>Step {{ step }}</h2>
    <user-form    v-if="step === 1" />
    <address-form v-if="step === 2" />
    <result       v-if="step === 3" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserForm from './UserForm'
import AddressForm from './AddressForm'
import Result from './Result'

export default {
  components: {
    UserForm,
    AddressForm,
    Result
  },
  computed: {
    ...mapState({ step: state => state.step })
  }
}
</script>
