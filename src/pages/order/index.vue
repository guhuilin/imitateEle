<template>
  <div class="proFilterWrap">
    <div class="proFilter">
      <!-- 配送方式 -->
      <div class="distribution">
        <p>配送方式</p>
        <div class="disTypeWrap">
          <div class="typeItem">
            <span>火鸟</span>
            <span>蜂鸟专送</span>
          </div>
        </div>
      </div>
      <div class="business">
        <p>商家属性（可以多选）</p>
        <div class="busChose">
          <div
           class="choseItem" v-for="(item,index) in filterbusData.filterbusData"
           :key="index"
           @click="()=>{checkChange(index)}">
            <img src="../../static/images/check.svg" alt="" v-if="item.checked">
            <span v-else class="title" :style="'color:'+item.color+';border-color:'+item.color">{{item.title}}</span>
            <span :class="item.checked?'colorActive':''">{{item.checkCont}}</span>
          </div>
          <!-- <div class="choseItem">

            <span>准</span>
            <span>准时达</span>
          </div> -->
        </div>
      </div>
    </div>
    <div class="bottomBtn">
      <span class="btnClear" @click="clearCheck">清空</span>
      <p class="btnConfir">确定<span v-if="conNum">({{conNum}})</span></p>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
  data() {
    return {
      conNum:""
    }
  },
  computed: {
    ...mapState({
      filterbusData:state=>state.proList
    })
  },
  mounted(){
    this.changeCheck();
    // let filterbusData=this.filterbusData.filterbusData.map(item=>item);
    // let conNum=filterbusData.filter(item=>item.checked)
    // this.conNum=conNum.length;
  },
  methods: {
    ...mapMutations({
      updateState:'proList/updateState'
    }),
    checkChange(ind){
      let filterbusData=this.filterbusData.filterbusData.map(item=>item);
      
      for(let key in filterbusData){
        if(ind==key){
          filterbusData[key].checked=!filterbusData[key].checked
        }
      }
      this.changeCheck();
      // let conNum=filterbusData.filter(item=>item.checked)
      // this.conNum=conNum.length;
      
    //  this.updateState({filterbusData:filterbusData})
    },
    clearCheck(){
      let filterbusData=this.filterbusData.filterbusData.map(item=>item);
      for(let key in filterbusData){
        filterbusData[key].checked=false
      }
      this.changeCheck();
    },
    changeCheck(){
      let filterbusData=this.filterbusData.filterbusData.map(item=>item);
      let conNum=filterbusData.filter(item=>item.checked)
      this.conNum=conNum.length;
    }
  },
}
</script>
<style scoped>
  .proFilterWrap{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5)
  }
  .proFilter{
    width: 100%;
    background: #fff;
  }
  .distribution,.business{
    width: 100%;
    padding: 0 20px 14px 12px;
    box-sizing: border-box;
    font-size: 12px;
  }
  .disTypeWrap{
    width: 100%;
  }
  .busChose{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .distribution p,.business p{
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
  }
  .disTypeWrap .typeItem,.busChose .choseItem{
    width: 32%;
    height: 33px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    border: solid 1px #eee;
    border-radius: 3px;
    margin-bottom: 6px;
  }
  .choseItem img{
    width: 26px;
    height: 26px;
  }
  .typeItem span:first-child{
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
  }
  .title{
    width: 19px;
    height: 19px;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 14px;
    border: solid 1px #ccc;
    border-radius: 3px;
    margin: 0 5px;
  }
  .bottomBtn{
    width: 100%;
    height: 56px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background: #f1f1f1;
  }
  .bottomBtn p,.bottomBtn>span{
    width: 49%;
    height: 42px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  .bottomBtn p{
    background:#56d176;;
    color:#fff;
  }
  .bottomBtn>span{
    background: #fff;
  }
  .colorActive{
    color:rgb(63, 189, 230)
  }
  
  /* .busChose .choseItem{
    width: 33%;
    display: flex;
    align-items: center;
  } */
</style>
