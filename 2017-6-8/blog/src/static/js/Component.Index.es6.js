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
            <section v-for="(item, idx) in articleList"
              @click="showArticle('page-article-content', idx)"
            >
              <div class="fl">
                <div class="img-box" :style="{backgroundImage: 'url('+item.imgURL+')'}"></div>
              </div>
              <div class="info">
                <div class="top">{{item.title}}</div>
                <div class="middle">{{item.subTitle}}</div>
                <div class="bottom">阅读：{{item.readCount || 0}}</div>
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
      articleList: []
    }
  },
  methods: {
    showArticle(componentName, idx) {
      const vm = this
      const item = vm.articleList[idx]
      vm.g.router.pages.push(componentName)
      vm.$set(vm.g.router, 'iframeURL', item.url)
      vm.$set(vm.g.router, 'tableName', 'demo')
      vm.$set(vm.g.router, 'tableId', item.id)
    }
  },
  mounted() {
    const vm = this
    setTimeout(function() {
      vm.g.router.isLoading = false
    }, 300)
    
    $.getJSON('php/index.php', {a: '作品'}, function(data) {
      vm.articleList = data
    })
  }
})