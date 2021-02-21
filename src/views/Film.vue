<template>
    <div>
        <filmSwiper>
          <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
            <img :src="data">
          </div>
        </filmSwiper>
        <!-- 只有在Vue中，组件上写的class，style会自动传到组件的根节点上  -->
        <filmHeader style="position:sticky;top:0px;background:white;"></filmHeader>
        <router-view></router-view>
    </div>
</template>

<script>

import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'

export default {
  data () {
    return {
      imgList: ['https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70', 'https://static.maizuo.com/v5/upload/dfb943b2b8771769a9adef95459fe2ae.jpg?x-oss-process=image/quality,Q_70']
    }
  },
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>
