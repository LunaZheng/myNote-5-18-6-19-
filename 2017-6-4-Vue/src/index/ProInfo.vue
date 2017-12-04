<template>
  <div class="pro-info">
    <div class="space">
      商品展示
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'pro-info',
  props: ['g'],
  data () {
    return {
      imgList: []
    }
  },
  methods: {

  },
  mounted() {
    const vm = this

    /*$.get('http://codding.cn/getData.php', {
      url: vm.g.router.url
    }, (idx) => {
      console.log(this)
    })*/
  }
}
</script>

<style scoped>

</style>
