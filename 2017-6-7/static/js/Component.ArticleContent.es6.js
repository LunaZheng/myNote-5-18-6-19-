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
              <span>阅读</span>
              <span>1000</span>
            </div>
            <div class="author">
              <span>作者：</span>
              <span>摘星fy</span>
            </div>
          </div>
          <div class="article-content">
            <dl>
              <dt>markdown 语法解读</dt>
              <dd>
                <img class="img" src="https://gdp.alicdn.com/imgextra/i1/2454217294/TB2RusljMxlpuFjy0FoXXa.lXXa_!!2454217294.jpg" alt="" />
              </dd>
              <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates autem consectetur et aut facere at laudantium similique hic mollitia, ullam quibusdam. Architecto sequi nesciunt esse id necessitatibus, eaque aperiam reiciendis?</dd>
            </dl>
          </div>
          <div class="rate">
            <div class="rate-list">
              <section v-for="n in 10">
                <div class="avatar fl">
                  <div class="img-box" style="background-image: url(./static/img/face.jpg)"></div>
                </div>
                <div class="words">
                  <div class="user-box">
                    <time class="fr">2017-6-7</time>
                    <span>摘星fy</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
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

    }
  },
  methods: {

  },
  mounted() {

  }
})