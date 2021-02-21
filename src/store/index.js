import Vue from 'vue'
import Vuex from 'vuex'
import CinemaModule from './module/CinemaModule'
import CityModule from './module/CityModule'
import TabbarModule from './module/TabbarModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    CinemaModule,
    TabbarModule,
    CityModule
  }
})
