import { getCateList, hotCityApi, letterCityApi, getShopList } from "@/api/index"

const state = {
  list: [1, 2, 3, 4],
  hotCity: [],
}

const mutations = {
  hotCityList(state, result) {
    this.hotCity = result;
  },
  updateShopList (state, payload) {
    state.shopList = payload
  }
}

const actions = {
  // gu
  async getCateList() {
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}