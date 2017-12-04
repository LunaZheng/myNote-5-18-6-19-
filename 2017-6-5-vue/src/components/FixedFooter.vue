<template>
  <footer class="fixed-footer">
    <div class="wrap">
      <ul class="div-4">
        <li
          v-for="(item, idx) in footerList"
          :class="{on: item.name === g.router.pageOut}"
          @click="setPageOut(idx)"
        >
          <a class="in" href="javascript:">
            <i :class="[item.icon]"></i>
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app',
  props: ['g'],
  data() {
    return {
      footerList: [{
        name: '首页',
        icon: 'icon-home3',
      }, {
        name: '购物车',
        icon: 'icon-cart',
      }, {
        name: '大喇叭',
        icon: 'icon-bullhorn',
      }, {
        name: '我的',
        icon: 'icon-user',
      }]
    }
  },
  components: {

  },
  methods: {
    setPageOut(idx) {
      var vm = this
      var item = vm.footerList[idx]
      vm.g.router = {
        pageOut: item.name
      }
    }
  },
  mounted() {
    var vm = this
    setTimeout(function() {
      if (!vm.footerList.some((item, idx) => {
        return item.name === vm.g.router.pageOut
      })) {
        vm.$set(vm.g.router, 'pageOut', '首页')
      }
    }, 0)
    
  }
}
</script>

<style scoped>
.fixed-footer {width: 100%; position: fixed; left: 0; bottom: 0; z-index: 100;}
.fixed-footer .wrap {text-align: center; box-shadow: 0 0 10px rgba(0,0,0,.2);}
.fixed-footer .wrap ul {}
.fixed-footer .wrap ul li {}
.fixed-footer .wrap ul li.on {color: orange;}
.fixed-footer .wrap ul li a {padding: 10px 0;}
.fixed-footer .wrap ul li a i {font-size: 34px;}
.fixed-footer .wrap ul li a span {display: block; font-size: 24px;}
</style>
