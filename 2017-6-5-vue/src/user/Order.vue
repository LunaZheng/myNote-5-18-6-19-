<template>
  <div class="my-order">
    <section
      v-for="(item, idx) in orderList"
      :class="{on: idx == g.router.orderIndex}"
      @click="setPageIn(idx)"
    >
      <a href="javascript:" class="in">
        <i :class="['icon', item.icon]"></i>
        <span>{{item.name}}</span>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'order',
  props: ['g', 'loadOrderList'],
  data () {
    return {
      orderList: [{
        name: '待付款',
        icon: 'icon-paypal',
      }, {
        name: '待发货',
        icon: 'icon-flag',
      }, {
        name: '待收货',
        icon: 'icon-truck',
      }, {
        name: '待评价',
        icon: 'icon-joomla',
      }, {
        name: '退款/售后',
        icon: 'icon-trophy',
      }]
    }
  },
  methods: {
    setPageIn(idx) { 
      var vm = this
      vm.$set(vm.g.router, 'pageIn', 'orderPage')
      vm.$set(vm.g.router, 'orderIndex', idx)
      // vm.$set(vm.g.router, 'isHideFooter', true)
      vm.loadOrderList && vm.loadOrderList(idx)
    }
  },
  mounted() {
    var vm = this
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-order {overflow: hidden; background: #fff; text-align: center;}
.my-order section {width: 20%; float: left;}
.my-order section .in {padding: 20px 0;}
.my-order section .icon {font-size: 34px;}
.my-order section span {display: block; font-size: 22px;}
.my-order section.on {color: orange;}
</style>
