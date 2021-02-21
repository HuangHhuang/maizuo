<template>
    <div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="我是有底线的"
          @load="onLoad">
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
              <img  :src="data.poster">
                <h3>{{data.name}}</h3>
                <p>主演：{{data.actors | actorsFilter}}</p>
                <p>{{data.nation}} | {{data.runtime}}分钟</p>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import { List, Cell } from 'vant'
import { mapState } from 'vuex'

Vue.use(List).use(Cell)
Vue.filter('actorsFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(item => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      finished: false,
      loading: false,
      current: 1,
      total: 0
    }
  },
  computed: {
    ...mapState('CityModule', ['cityId'])
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=6361326`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films
      this.total = res.data.data.total
      // console.log(res.data.data.films)
    })
  },
  methods: {
    onLoad () {
      // console.log('加载新数据')

      // 1.ajax请求新页面的数据
      // 2.合并新数据到老数据
      // 3.this.loading=false
      if (this.datalist.length === this.total && this.datalist.length !== 0) {
        this.finished = true
        return
      }
      this.current++
      http({
        url: `/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=6361326`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    },
    handleClick (id) {
      // 1.路径
      // this.$router.push(`/detail/${id}`)    //编程式路由

      // 2.路由名字
      //   this.$router.push({
      //     name: 'huang',
      //     params: {
      //       myid: id
      //     }
      //   })

      // 3. query方式跳转详情
      this.$router.push(`/detail?id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .van-cell {
    overflow: hidden;
    padding: 10px;
    img {
      float: left;
      width: 100px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>style
