import {getProductList} from "@/api/proList"

const state = {
  listData:[]
}

const mutations = {
  updateState(state,payload){
    for(let key in payload){
      state[key]=payload[key]
    }
  }
}

const actions = {
  async getProList({state,commit},payload){
    let data = await getProductList();
    console.log('data...', data);
    commit('updateState',{listData:data})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
