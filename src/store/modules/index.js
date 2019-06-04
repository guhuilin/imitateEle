import {
  getCateList,//轮播分类
  getShopList//商品
} from "@/api/index"

const state = {
  CateListData: [],
  ShopListData:[]
}

const mutations = {
  CateList(state,payload){
    state.CateListData = payload;
    // console.log(state.CateListData,'2226')
  },
  //商品
  ShopList(state,payload){
    console.log(payload,'666')
    state.ShopListData = payload;
  }
}

const actions = {
  //导航分类
  async getCateList( { commit,state },payload){
    // let result = await getCateList(payload);
    let result = await getCateList();
    commit('CateList', result.data)
      // console.log('data...', data);
    return result;
  },
  //商品
  async getShopList({commit,state},payload){
    let result = await getShopList();
    commit('ShopList',result.data);
    // console.log('data..',result)
    return result;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
