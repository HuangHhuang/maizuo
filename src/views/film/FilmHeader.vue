<template>
    <ul>
        <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
        <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
    </ul>
</template>

<style lang="scss" scoped>

    ul{
        z-index: 100;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .active{
        color: red;
        border-bottom: 3px solid red;
    }
</style>
