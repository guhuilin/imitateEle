<template>
  <div class="proFilterWrap">
    <div class="proFilter">
      <div class="distribution">
        <p>配送方式</p>
        <div class="disTypeWrap">
          <div class="typeItem" @click="changeDisType">
            <img src="../../static/images/check.svg" alt="" v-if="disType">
            <img v-else src="../../static/images/bird.JPG"/>
            <span :class="disType?'colorActive':''">蜂鸟专送</span>
          </div>
        </div>
      </div>
      <div class="business">
        <p>商家属性（可以多选）</p>
        <div class="busChose">
          <div
           class="choseItem" v-for="(item,index) in businessData"
           :key="index"
           @click="()=>{checkChange(index)}">
            <img src="../../static/images/check.svg" alt="" v-if="item.checked">
            <span v-else class="title" :style="'color:'+item.color+';border-color:'+item.color">{{item.title}}</span>
            <span :class="item.checked?'colorActive':''">{{item.checkCont}}</span>
          </div>
          <!-- <div class="choseItem">
            <img src="../../static/images/check.svg" alt="" v-if="item.checked">
            <span>准</span>  
            <span>准时达</span>
          </div> -->
        </div>
      </div>
    </div>
    <div class="bottomBtn">
      <span class="btnClear" @click="clearCheck">清空</span>
      <p class="btnConfir" @click="confirFn">确定<span v-if="conNum">({{conNum}})</span></p>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
  data() {
    return {
      businessData:[],
      conNum:"",
      disType:false
    }
  },
  computed: {
    ...mapState({
      filterbusData:state=>state.proList
    })
  },
  mounted(){
    this.businessData=Object.assign([],this.filterbusData.filterbusData);
    this.changeCheck();
  },
  methods: {
    ...mapMutations({
      updateState:'proList/updateState'
    }),
    checkChange(ind){
      let filterbusData=this.businessData;
      filterbusData[ind].checked=!filterbusData[ind].checked
      this.changeCheck();
      this.updateState({filterbusData:filterbusData})
    },
    changeDisType(){
      this.disType=!this.disType;
      this.changeCheck()
    },
    clearCheck(){
      let filterbusData=this.businessData;
      for(let key in filterbusData){
        filterbusData[key].checked=false
      }
      this.disType=false;
      this.changeCheck();
    },
    confirFn(){
      console.log('确定')
    },
    // 改变选中的数量
    changeCheck(){
      let filterbusData=this.businessData;
      let conNum=filterbusData.filter(item=>item.checked)
      this.conNum=conNum.length;
      if(this.disType){
        this.conNum+=1;
      }
    }
  },
}
</script>
<style scoped>
  .proFilterWrap{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
  }
  .proFilter{
    width: 100%;
    background: #fff;
    /* transform: translateY(0);
    transition:transform 2s; */
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
  .typeItem img,.choseItem img{
    width: 22px;
    height: 22px;
    margin-right: 4px;
  }
  .typeItem span:first-child{
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    margin-right: 4px;
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
</style>


