import { getCateList, hotCityApi, letterCityApi } from "@/api/index"

const state = {
  list: [1, 2, 3, 4],
  hotCity: [],
}

const mutations = {
  hotCityList(state, result) {
    this.hotCity = result;
  },
}

const actions = {
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
