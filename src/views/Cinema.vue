<template>

    <div class="cinema" :style="{height:height}">
      <van-nav-bar title="影院" @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <van-icon name="search" size="22" color="gray"/>
        </template>
        <template #left>
          {{ cityName }}<van-icon name="arrow-down" size="10" color="gray"/>
        </template>
      </van-nav-bar>
        <ul>
            <li v-for="data in cinemaList" :key="data.cinemaId">
                <div>{{data.name}}</div>
                <div class="address">{{data.address}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import BScroll from 'better-scroll'
import { NavBar, Icon } from 'vant'
import { mapState, mapMutations, mapActions } from 'vuex'

Vue.use(NavBar).use(Icon)
export default {
  data () {
    return {
      height: 0
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId', 'cityName'])
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    if (this.cinemaList.length === 0) {
      this.getCinemaList(this.cityId).then(() => {
        // 状态立即更改，但是dom异步渲染
        this.$nextTick(() => {
          this.scroll = new BScroll('.cinema', {
            scrollbar: {
              fade: true
            }
          })
          // console.log(this.scroll)
        })
      })
    } else {
      console.log('缓存')
      this.$nextTick(() => {
        this.scroll = new BScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
        // console.log(this.scroll)
      })
    }
  },
  methods: {
    ...mapMutations('CinemaModule', ['clearCinemaList']),
    ...mapActions('CinemaModule', ['getCinemaList']),
    onClickLeft () {
      // 将cinemaList清空
      this.clearCinemaList()
      this.$router.push('/city')
    },
    onClickRight () {
      this.$router.push('/cinema/search')
    }
  }
}
</script>
<style lang="scss" scoped>
    ul {
        display: block;
        li {
        padding: 5px;
        .address {
            font-size: 12px;
            color: gray;
        }
    }
    }
    .cinema {
      height: 300px;
      // overflow: hidden;
      position: relative; //修正滚动条位置
    }
</style>
