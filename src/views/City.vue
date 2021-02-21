<template>
    <div>
        <van-index-bar :index-list="computedCityList" @select="handleSelect">
            <div v-for='data in cityList' :key="data.type">
                <van-index-anchor  :index="data.type" />
                <van-cell v-for="(item, index) in data.list" :key="index" :title="item.name" @click="handleChangePage(item.name, item.cityId)"/>
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import Vue from 'vue'
import http from '@/util/http'
import { IndexBar, IndexAnchor, Toast } from 'vant'
import { mapMutations } from 'vuex'

Vue.use(IndexBar).use(IndexAnchor).use(Toast)
export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    computedCityList () {
      return this.cityList.map(item => item.type)
    }
  },
  mounted () {
    http({
      url: '/gateway?k=2682023',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
    //   console.log(res.data.data.cities)
      this.cityList = this.handleCityData(res.data.data.cities)
    //   console.log(this.cityList)
    })
  },
  methods: {
    ...mapMutations('CityModule', ['changeCityName', 'changeCityId']),
    handleCityData (cities) {
      const letterArr = []
      const newCities = []
      for (let code = 65; code < 91; code++) {
        letterArr.push(String.fromCharCode(code))
      }
      //   console.log(letterArr)
      letterArr.forEach((letter) => {
        const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        if (list.length > 0) {
          newCities.push({
            type: letter,
            list: list
          })
        }
      })
      return newCities
    },
    handleSelect (index) {
      Toast(index)
    },
    handleChangePage (name, cityId) {
      this.changeCityName(name)
      this.changeCityId(cityId)
      this.$router.back()
    }
  }
}
</script>
