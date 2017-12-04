var _vm = window.top.vm

var vm = new Vue({
  el: '#app',
  data() {
    return {
      router: JOSN.parse(JSON.stringify(_vm.router)),

    }
  },
  watch: {
    router: {
      deep: true,
      handler(newVal, oldVal) {

      }
    }
  },
  methods: {
    getDBList() { // 获取所有数据库信息
      var vm = this
      
    }
  },
  mounted() {

  }
})