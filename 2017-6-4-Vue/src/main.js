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
    const dh = $(window).height()
    $('[lazy-load]').each(function() {
      const me = $(this)
      const pos = this.getBoundingClientRect()
      if (pos.top > dh || pos.bottom < 0) {

      } else {
        // 进入可视区了
        const src = me.attr('lazy-load')
        const oImg = new Image()
        oImg.onload = () => {
          me.find('div').css({
            background: '#ddd url('+src+') no-repeat center / cover'
          }).end().addClass('on')
        }
        oImg.src = src
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
        location.hash = location.host.indexOf('localhost') > -1 ? 
        JSON.stringify(newVal) : // 本机
        encodeURI(JSON.stringify(newVal))
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
    const vm = this
    vm.routerInit()
    window.addEventListener('hashchange', () => {
      document.documentElement.scrollTop = document.body.scrollTop = 0
      vm.routerInit()
    }, false)
  }
})
