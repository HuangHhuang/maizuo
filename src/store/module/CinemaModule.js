import http from '@/util/http'

const module = {
  namespaced: true,
  state: {
    cinemaList: []
  },
  mutations: {
    changeCinemaList (state, list) {
      state.cinemaList = list
    },
    clearCinemaList (state) {
      state.cinemaList = []
    }
  },
  actions: {
    getCinemaList (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=8258111`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('changeCinemaList', res.data.data.cinemas)
      })
    }
  }
}

export default module
