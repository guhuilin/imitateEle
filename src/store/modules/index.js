import {
  getCateList
} from "@/api/index"

const state = {
  CateListData: []
}

const mutations = {
  CateList(state,payload){
    state.CateListData = payload;
    // state.list.slice(0,8)
    console.log(state.CateListData,'2226')
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
