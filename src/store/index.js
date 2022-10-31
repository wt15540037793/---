import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import persistedState from 'vuex-persistedstate'
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  getters: {

  },
  actions: {},
  modules: {},
  plugins: [
    persistedState()
  ]
})