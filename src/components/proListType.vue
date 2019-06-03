<template>
  <div class="proTypeWrap">
    <div class="typeLeft">
      <div class="typeTitle">
        <span>一国料理</span>
        <span>1853</span>
      </div>
      <div :class="ind==0?'typeItem itemBg':'typeItem'" @click="()=>this.sideChange()">
        <img alt="" />
        <span class="itemCont">快餐便当</span>
        <span class="itemNum">1460</span>
        <span class="itemNext">></span>
      </div>
      <div class="typeItem">
        <img alt="" />
        <span class="itemCont">快餐便当</span>
        <span class="itemNum">1460</span>
        <span class="itemNext">></span>
      </div>
      <div class="typeItem">
        <img alt="" />
        <span class="itemCont">快餐便当</span>
        <span class="itemNum">1460</span>
        <span class="itemNext">></span>
      </div>
    </div>
    <div class="typeRight">
      <div class="slide">
        <span>简餐</span>
        <span>1346</span>
      </div>
      <div class="slide">
        <span>简餐</span>
        <span>1346</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      ind:0
    }
  },
  methods: {
    sideChange(){
      console.log(90)
    }
  },
}
</script>
<style scoped>
  .proTypeWrap{
    width: 100%;
    display: flex;
    color: #333;
    
  }
  .typeLeft{
    width: 50%;
    
    box-sizing: border-box;
    font-size: 12px;
    background-color: #f1f1f1; 
  }
  .typeLeft>div{
    width: 100%;
    padding-left: 8px;
    padding-right: 12px;
    box-sizing: border-box;
  }
  .typeRight{
    flex: 1;
    font-size: 14px;
    padding: 0 12px;
    box-sizing: border-box;
    background: #fff;
    color: #666;
  }
  .typeItem{
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .typeItem>img{
    width: 19px;
    height: 19px;
  }
  .typeTitle,.slide{
    width: 100%;
    height: 42px;
    line-height: 42px;
    display: flex;
    justify-content: space-between;
  }
  .slide{
    border-bottom: solid 1px #ccc;
  }
  .itemCont{
    
  }
  .itemNum{
    padding: 0 3px;
    height: 16px;
    color: #fff;
    background: #ccc;
    border-radius: 8px;
  }
  .itemNext{
    color: #ccc;
    font-size: 16px;
    position: relative;
    top: -2px;
  }
  .itemBg{
    background: #fff;
  }
  .slideColor{
    color: #3190e8;
  }
  /* .typeRight .slide{
    width: 100%;
    height: 
  } */
</style>

