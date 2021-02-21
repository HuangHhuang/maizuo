<template>
    <div v-if="filmInfo">
        <!-- <div v-touch:swipeleft="onSwipeLeft">Swipe me!</div> -->
        <detail-header v-top :title="filmInfo.name"></detail-header>
        <div :style="{backgroundImage:'url('+filmInfo.poster+')'}"
        style="height:200px;background-size:cover;background-position:center;"></div>
        <h3>{{filmInfo.name}}-{{filmInfo.filmType.name}}</h3>
        <div>
          {{filmInfo.category}}
        </div>
        <div>
          {{filmInfo.premiereAt | dateFilter}} 上映
        </div>
        <div>
          {{filmInfo.nation}}|{{filmInfo.runtime}}分钟
        </div>
        <div :class=" isShow ? '' : 'synopsis' ">
          {{filmInfo.synopsis}}
        </div>
        <div style="text-align:center;"><i class="iconfont" :class=" isShow ? 'icon-less' : 'icon-moreunfold'" @click="isShow = !isShow"></i></div>
        <h3>演职人员</h3>
        <detail-swiper :perslide="3" swiperclass="swiper-actors">
          <div class="swiper-slide" v-for="(data,index) in filmInfo.actors" :key="index">
            <img :src="data.avatarAddress">
            <div style="text-align:center">
              <div>{{data.name}}</div>
              <div>{{data.role}}</div>
            </div>
          </div>
        </detail-swiper>
        <h3>剧照</h3>
        <detail-swiper :perslide="2" swiperclass="swiper-photos">
          <div class="swiper-slide" v-for="(data,index) in filmInfo.photos" :key="index" @click="handlePreview(index)">
            <div :style="{backgroundImage:'url('+data+')'}"
        style="height:100px;background-size:cover;background-position:center;"></div>
          </div>
        </detail-swiper>

    </div>
</template>

<script>
import Vue from 'vue'
import http from '@/util/http'
import moment from 'moment'
import detailSwiper from './detail/DetailSwiper.vue'
import detailHeader from './detail/DetailHeader.vue'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'
// import { VueTouch } from 'vue-touch'
// Vue.use(VueTouch, { name: 'v-touch' })
Vue.filter('dateFilter', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})
Vue.directive('top', {
  inserted (el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 50) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  }
})
export default {
  data () {
    return {
      filmInfo: null,
      isShow: false
    }
  },
  methods: {
    ...mapMutations('TabbarModule', ['hide', 'show']),
    handlePreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        closeable: true,
        loop: true,
        startPosition: index
      })
    }
    // onSwipeLeft () {
    //   console.log('1111111111')
    // }
  },
  mounted () {
    this.hide()
    // this.$route 当前匹配的路由信息对象 （注意不是router）
    // console.log('利用获取的ID，ajax请求后端的接口', this.$route.params.myid)
    // console.log('利用获取的ID，ajax请求后端的接口', this.$route.query.id)
    http({
      url: `/gateway?filmId=${this.$route.query.id}&k=4980463`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filmInfo = res.data.data.film
    })
  },
  beforeDestroy () {
    this.show()
  },
  components: {
    detailSwiper,
    detailHeader
  }
}
</script>

<style lang="scss" scoped>
  .synopsis {
    height: 57px;
    overflow: hidden;
  }
</style>
