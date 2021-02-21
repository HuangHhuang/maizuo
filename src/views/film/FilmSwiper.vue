<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle' // 引入swiper.js
import 'swiper/swiper-bundle.min.css' // 引入css
export default {
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-slide{
    img{
      width: 100%;
      height: 192px;
    }
  }
</style>
