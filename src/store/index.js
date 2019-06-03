import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

// 引入模块
import index from './modules/index'
import proList from './modules/productList'

export default new Vuex.Store({
  modules: {
    index,
    proList
  },
  plugins: [Logger()]
})
