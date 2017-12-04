Vue.component('page-index', {
  template:  `
    <div class="view">
      <div class="topbar">
        <div class="fl">
          <i class="icon icon-menu" id="menu"
            @click="g.router.isShowProfile = !g.router.isShowProfile"
          ></i>
        </div>
        <div class="title-box">
          <div><img src="static/img/logo.png" alt=""></div>
        </div>
      </div>
      <div class="content">
        <div class="space">
          <div id="article-list">
            <section v-for="n in 10"
              @click="g.goForward('page-article-content')"
            >
              <div class="fl">
                <div class="img-box" style="background-image: url(static/img/bg.jpg);"></div>
              </div>
              <div class="info">
                <div class="top">wordpress博客接入七牛CDN</div>
                <div class="middle">前言 微信的登录，扫二维码码之后，可以通过微信给的code去获取用户的微信信息，显示出对应的帐号列表（列表页），选择登录之后跳转至相应的页面。 测试的时候发现，如果在跳转后的页面，点击浏览器返回，还是会显示登录帐号列表。这时候登录是会失败的，因为已经登录过，没有了半登录态，应该需要重新扫码登录才行。 所以列表页是完全不...</div>
                <div class="bottom">阅读：1000</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

  `,
  props: ['g'],
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    const vm = this
    setTimeout(function() {
      vm.g.router.isLoading = false
    }, 300)
  }
})