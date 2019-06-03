import {
  getCateList
} from "@/api/index"

const state = {
  list: []
}

const mutations = {

}

const actions = {
  async getCateList(){
    let data = await getCateList();
    console.log('data...', data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
