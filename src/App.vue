<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

// import axios from 'axios'
import tabbar from './components/Tabbar'
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  },
  computed: {
    ...mapState('TabbarModule', ['isTabbarShow'])
  }
  // mounted () {
  //   1.mei
  //   axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5').then(res => {
  //     console.log(res.data)
  //   })

  //   2.maoyan
  //   axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=C2170A10683411EBA6D54DA378795FC951FF10055B704DFBBE8E7BB6078B85B5&optimus_risk_level=71&optimus_code=10').then(res => {
  //     console.log(res.data)
  //   })

  //   3.maizuo
  //   axios({
  //     url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6361326',
  //     headers: {
  //       'X-Host': 'mall.film-ticket.film.list',
  //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1612619294352432131407873","bc":"310100"}'
  //     }
  //   }).then(res => {
  //     console.log(res.data)
  //   })
  // }
}
</script>

<style lang="scss" scoped>
  .huangactive{
    color: red;
  }
  section {
    margin-bottom: 50px;
  }
</style>

<style lang="scss">
  ul {
    display: flex;
    li {
      flex: 1;
      list-style: none;
    }
  }
  * {
    touch-action: manipulation;
    margin: 0;
    padding: 0;
  }

  html,body {
    height: 100%;
  }

</style>
