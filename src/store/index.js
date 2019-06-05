import Vue from 'vue'
import Vuex from 'vuex'
import Longger from 'vuex/dist/logger'
import Index from './modules/index'

Vue.use(Vuex);

// 引入模块
import index from './modules/index'
import proList from './modules/productList'

export default new Vuex.Store({
  modules: {
    index,
    proList
  },
  plugins: [Longger()]
})
