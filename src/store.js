import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
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

const actions = {
  nextStep ({commit}) {
    commit('NEXT_STEP')
  },
  prevStep ({commit}) {
    commit('PREV_STEP')
  },
  reset ({commit}) {
    commit('RESET')
  }
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  NEXT_STEP (state) {
    state.step = state.step + 1
  },
  PREV_STEP (state) {
    state.step = state.step - 1
  },
  RESET (state) {
    state.step = 1
    state.user = INITIAL_STATE.user
    state.address = INITIAL_STATE.address
  }
}

// Combine the initial state, actions and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state: INITIAL_STATE,
  actions,
  mutations
})
