import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '../views/Center.vue'
import Cinema from '../views/Cinema.vue'
import Search from '../views/Search.vue'
import City from '../views/City.vue'
import Film from '../views/Film.vue'
// import Login from '../views/Login.vue'
import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: 'nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/cinema/search',
    component: Search
  },
  // {
  //   path: '/detail/:myid',
  //   component: Detail,
  //   name: 'huang'
  // },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '*',
    redirect: '/film'
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   const auth = ['/center', '/order', '/money', '/card']

//   if (auth.includes(to.fullPath)) {
//     if (!localStorage.getItem('token')) {
//       next('/login')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
