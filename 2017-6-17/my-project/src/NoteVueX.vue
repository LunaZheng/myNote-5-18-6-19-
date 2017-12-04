<template>
  <div>
    <order></order>
    <order2></order2>
  </div>
</template>

<!-- 要和高手做朋友 -->
<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

Vue.component('order', {
  template: `
    <div>
      <button @click="clickMe">点我</button>
      <div>orders {{count}}</div>
    </div>
  `,
  props: [''],
  data() {
    return {

    }
  },
  computed: {
    count() {
      return store.state.count
    }
  },
  methods: {
    clickMe() {
      store.commit('increment')
    }
  },
  mounted() {

  }
})

Vue.component('order2', {
  template: `
    <div>
      <button @click="clickMe">点我</button>
      <div>orders {{count}}</div>
    </div>
  `,
  props: [''],
  data() {
    return {

    }
  },
  computed: {
    count() {
      return store.state.count
    }
  },
  methods: {
    clickMe() {
      store.commit('increment')
    }
  },
  mounted() {

  }
})

export default {
  name: 'note-vue-x',
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
