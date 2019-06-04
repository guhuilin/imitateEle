import { getCateList, hotCityApi, letterCityApi, getShopList, getCateList } from "@/api/index"

const state = {
  list: [1, 2, 3, 4],
  hotCity: [],
  CateListData: []
}

const mutations = {
  hotCityList(state, result) {
    this.hotCity = result;
  },
  updateShopList (state, payload) {
    state.shopList = payload
  },
  CateList(state,payload){
    state.CateListData = payload;
    // state.list.slice(0,8)
    console.log(state.CateListData,'2226')
  }
}

const actions = {
  async getCateList(){
    let data = await getCateList();
  },
  async getHotCity({ commit }, payload) {
    let result = await hotCityApi(payload);
    return result;
  },
  async getLetterCity({ commit }, payload) {
    let result = await letterCityApi(payload);
    console.log(result,'...')
    return result;
  },
  // su
  async getCateList () {
    let data = await getCateList()
    console.log('data...', data)
  },
  async getShopList ({ commit }) {
    let data = await getShopList()
    commit('updateShopList', data)
  },
  //导航分类
  async getCateList( { commit,state },payload){
    // let result = await getCateList(payload);
    let result = await getCateList();
    commit('CateList', result.data)
      // console.log('data...', data);
    return result;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}