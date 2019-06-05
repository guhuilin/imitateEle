import { getCateList, getShopList,getShopDate } from '@/api/index'

const state = {
  shopList: [],
  shopDate:[]
}

const mutations = {
  updateShopList (state, payload) {
    state.shopList = payload
  },
  updateShopDate(state,payload){
    state.shopDate = payload
    console.log(state.shopDate,5555555)
  }
}

const actions = {
  async getCateList () {
    let data = await getCateList()
  },
  async getShopList ({ commit }) {
    let data = await getShopList()
    commit('updateShopList', data)
  },
  async getShopDate({commit},payload){
   let data = await getShopDate(payload)
   commit('updateShopDate',data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
