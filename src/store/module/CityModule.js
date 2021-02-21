const module = {
  namespaced: true,
  state: {
    cityId: '110100',
    cityName: '北京'
  },
  mutations: {
    changeCityName (state, name) {
      state.cityName = name
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    }
  },
  actions: {

  }
}

export default module
