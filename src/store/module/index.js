import { getCateList, getShopList } from '@/api/index'

const state = {
  shopList: [1, 2, 3]
}

const mutations = {
  updateShopList (state, payload) {
    state.shopList = payload
  }
}

const actions = {
  async getCateList () {
    let data = await getCateList()
    console.log('data...', data)
  },
  async getShopList ({ commit }) {
    let data = await getShopList()
    commit('updateShopList', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
