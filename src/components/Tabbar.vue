<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="huangactive">
        <i class="iconfont icon-video"></i>
        <span>电影</span>
      </router-link>
      <router-link to="/cinema" tag="li" active-class="huangactive">
        <i class="iconfont icon-store"></i>
        <span>影院</span>
      </router-link>
      <router-link to="/center" tag="li" active-class="huangactive">
        <i class="iconfont icon-account"></i>
        <span>我的</span>
      </router-link>
    </ul>
    <router-view></router-view>
  </nav>
</template>

<style lang="scss" scoped>
    nav{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 50px;
        line-height: 25px;
        text-align: center;
        background: white;
        ul{
            li{
              display: flex;
              flex-direction: column;
            }
        }
        iconfont{
          font-size: 21px;
        }
        span{
          font-size: 12px;
        }
    }
</style>
