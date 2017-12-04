<template>
  <div class="carousel"
    @mousedown="fnDown"
    @touchstart="fnDown"
  ><!-- 轮播图 -->
    <div class="in">
      <ul class="img-list"
        :style="{left: -curIndex_ + '00%'}"
      >
        <li
          v-for="(item, idx) in imgList"
          :lazy-load="item"
        >
          <div></div>
        </li>
      </ul>
      <div class="btn-box">
        <a href="javascript:"
          v-for="(item, idx) in imgList"
          :class="{on: idx === curIndex_}"
          @click="setState(idx)"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carouse',
  props: ['g', 'imgList', 'curIndex'],
  data () {
    return {
      curIndex_: 0
    }
  },
  watch: {
    curIndex_(newVal) {
      $('.carousel .imgList').css({
        transition: '.3s all',
      })
    }
  },
  methods: {
    fnDown(e) {
      e.preventDefault()
      const vm = this
      const isPC = e.type === 'mousedown'
      const carouselEl = $(isPC ? e.target : e.targetTouches[0].target).closest('.carousel')
      const x1 = isPC ? e.clientX : e.targetTouches[0].clientX
      const originX = -vm.curIndex_ * carouselEl.width()
      const imgList = carouselEl.find('.img-list')
      const activeEl = $(isPC ? document : carouselEl)

      imgList.css({
        transition: 'none'
      })

      activeEl.on('mousemove.carousel touchmove.carousel', function(e) {
        const x2 = isPC ? e.clientX : e.targetTouches[0].clientX
        const x = x2 - x1 + originX
        imgList.css({
          left: x + 'px'
        })
      })

      activeEl.on('mouseup.carousel touchend.carousel', function(e) {
        $(this).off('mousemove.carousel mouseup.carousel touchmove.carousel touchend.carousel')
        const x3 = isPC ? e.clientX : e.changedTouches[0].clientX
        const dis = x3 - x1
        if (Math.abs(dis) > 20) {
          dis > 0 ? vm.curIndex_-- : vm.curIndex_++
        }
        if (vm.curIndex_ < 0) {
          vm.curIndex_ = 0
        }
        if (vm.curIndex_ > vm.imgList.length - 1) {
          vm.curIndex_ = vm.imgList.length - 1
        }
        imgList.css({
          transition: '',
          left: -vm.curIndex_ + '00%'
        })
      })
    },
    setState(idx) {
      const vm = this
      vm.curIndex_ = idx
    }
  },
  mounted() {
    const vm = this
    vm.$nextTick(function() {
      vm.g.lazyLoad()
    })
  }
}
</script>

<style scoped>
.carousel {padding-top: 60%; position: relative; overflow: hidden;}
.carousel .in {width: 100%; height: 100%; position: absolute; left: 0; top: 0;}
.carousel .img-list {height: 100%; white-space: nowrap; position: relative; left: 0;
  transition: .3s all;
  transform: scale(1);
}
.carousel .img-list li {width: 100%; height: 100%; vertical-align: top; display: inline-block; background: #ddd url(/static/img/logo-gray.png) no-repeat center; padding: 0;}
.carousel .btn-box {width: 100%; position: absolute; left: 0; bottom: 20px; text-align: center;}
.carousel .btn-box a {display: inline-block; width: 16px; height: 16px; background: rgba(0,0,0,.5); border-radius: 50%; margin: 0 10px;}
.carousel .btn-box a.on {background: orange;}
</style>
