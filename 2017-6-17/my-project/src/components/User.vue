<template>
  <div class="how">
    <div>{{username}}</div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      username: '张三'
    }
  },
  mounted() {
    const vm = this
    console.log(vm.$route.params)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
