// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'

Vue.config.productionTip = false

$(window).on('scroll', lazyLoad)
$.timerLazyLoad = 0

function lazyLoad() {
  clearTimeout($.timerLazyLoad)
  $.timerLazyLoad = setTimeout(function() {
    var dh = $(window).height()
    $('[lazy-load]').each(function() {
      var me = $(this)
      var pos = this.getBoundingClientRect()
      if (pos.top > dh || pos.bottom < 0) {

      } else {
        me.css({
          backgroundImage: 'url('+me.attr('lazy-load')+')'
        }).removeAttr('lazy-load')
      }
    })
  }, 200)
}

new Vue({
  el: '#app',
  template: '<App :g="g" />',
  components: { App },
  data() {
    return {
      g: {
        router: {},
        lazyLoad
      }
    }
  },
  watch: {
    'g.router': {
      deep: true,
      handler(newVal) {
        location.hash = JSON.stringify(newVal)
      }
    }
  },
  methods: {
    routerInit() {
      let vm = this
      let hash = location.hash.substring(1)
      let router = {}
      try {
        hash = decodeURI(hash)
      } catch (e) {
        console.log('decodeURI err')
      }
      try {
        router = JSON.parse(hash)
      } catch (e) {
        console.log('router parse err')
      }
      vm.g.router = router
    }
  },
  mounted() {
    var vm = this
    vm.routerInit()
    window.addEventListener('hashchange', () => {
      vm.routerInit()
    }, false)
  }
})
