<template>
  <div class="video-list">
    <router-link :to="'/video/'+$route.params.videoType+'/肖申克的救赎'">肖申克的救赎</router-link>
    <router-link :to="'/video/'+$route.params.videoType+'/马达加斯加'">马达加斯加</router-link>
    <router-link :to="'/video/'+$route.params.videoType+'/猫和老鼠电影版'">猫和老鼠电影版</router-link>
  </div>
</template>

<script>
export default {
  name: 'video-list',
  data () {
    return {
      
    }
  },
  mounted() {
    const vm = this
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
