<template>
    <div>
        我的
    </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  }
}
</script>
