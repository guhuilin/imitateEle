import {getProductList} from "@/api/proList"

const state = {
  listData:[],
  filterbusData:[
    {
      title:'品',
      checkCont:'品牌商家',
      color:'rgb(63, 189, 230)',
      checked:false
    },
    {
      title:'保',
      checkCont:'外卖保',
      color: 'rgb(153, 153, 153)',
      checked:false
    },
    {
      title:'准',
      checkCont:'准时达',
      color:'rgb(63, 189, 230)',
      checked:false
      
    },
    {
      title:'新',
      checkCont:'新店',
      color: 'rgb(255, 78, 0)',
      checked:false
    },
    {
      title:'付',
      checkCont:'在线支付',
      color: 'rgb(255, 78, 0)',
      checked:false
    },
    {
      title:'票',
      checkCont:'开发票',
      color: 'rgb(153, 153, 153)',
      checked:false
    }
  ]
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
