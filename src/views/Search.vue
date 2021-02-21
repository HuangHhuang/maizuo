<template>
    <div>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @cancel="onCancel"
        />
        <ul>
            <van-cell-group v-for="data in computedCinemaList" :key="data.cinemaId">
                <van-cell :title="data.name" :label="data.address" />
            </van-cell-group>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import { Search, Cell, CellGroup } from 'vant'
import { mapState, mapActions } from 'vuex'

Vue.use(Search).use(Cell).use(CellGroup)
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId']),
    computedCinemaList () {
      if (this.value === '') return []
      return this.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  mounted () {
    if (this.cinemaList.length === 0) {
      this.getCinemaList(this.cityId)
    } else {
      console.log('缓存')
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    onCancel () {
    // push back replace
      this.$router.replace('/cinema')
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
    van-search {
        z-index: 100;
    }
</style>
