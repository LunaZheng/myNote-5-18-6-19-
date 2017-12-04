Vue.component('page-article-content', {
  template:  `
    <div class="view" id="page-article">
      <div class="topbar">
        <div class="fl">
          <i class="icon icon-arrow-left2" id="menu" style="color: #333"
            @click="g.goBack"
          ></i>
        </div>
        <div class="title-box">
          <div>移动端那点事~</div>
        </div>
      </div>
      <div class="content">
        <div class="space">
          <div class="article-title">
            <div class="fr read-count">
              <span>阅读：</span>
              <span>1000</span>
            </div>
            <div class="author">
              <span>作者：</span>
              <span>摘星fy</span>
            </div>
          </div>
          <div style="height: 800px;">
            <iframe :src="g.router.iframeURL" frameborder="0" style="width: 100%; height: 100%; display: block;"></iframe>
          </div>
          <div class="article-content">

          </div>
          <form class="comment" @submit.prevent="sendRate" style="padding-top: 20px;">
            <div>
              <input type="text" class="form-control" v-model="dataRate.nickName" required placeholder="尊姓大名" />
            </div>
            <div style="padding: 15px 0;">
              <textarea class="form-control" v-model="dataRate.content" required placeholder="留下您宝贵的遗言"></textarea>
            </div>
            <div>
              <input type="submit" value="提交" class="btn" />
            </div>
          </form>
          <div class="rate">
            <div class="rate-list">
              <section v-for="(item, idx) in rateList">
                <div class="avatar fl">
                  <div class="img-box" :style="{backgroundImage: 'url(./static/biaoqing/'+item.avatar+'.gif)'}"></div>
                </div>
                <div class="words">
                  <div class="user-box">
                    <time class="fr">{{item.createTime | date}}</time>
                    <span>{{item.nickName}}</span>
                  </div>
                  <p>{{item.content}}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: ['g'],
  data() {
    return {
      dataRate: {
        nickName: '',
        content: '',
      },
      rateList: []
    }
  },
  methods: {
    sendRate() {
      const vm = this
      const d = vm.dataRate
      if (!d.nickName) {
        alert('请输入 尊姓大名')
        return
      }
      if (!d.content) {
        alert('请输入 评论内容')
        return
      }
      let data = {
        a: '增',
        nickName: d.nickName,
        content: d.content,
        tableName: vm.g.router.tableName,
        tableId: vm.g.router.tableId,
      }
      $.post('php/rate.php', data, function(data) {
        if (data.code) {
          alert(data.msg)
          return
        }
        vm.rateList.unshift(data)
        d.nickName = ''
        d.content = ''
      }, 'json')
    }
  },
  mounted() {
    const vm = this
    $.getJSON('php/rate.php', {
      a: '查',
      tableName: vm.g.router.tableName,
      tableId: vm.g.router.tableId,
    }, function(data) {
      vm.rateList = data
    })
  }
})
