<template>
  <div class="proSortWrap">
    <div class="proSor">
      <div class="sortItem" v-for="(item,index) in sortTypeData"
       :key="index"
       @click="()=>{isCheck(index)}">
        <div class="sortLeft">
          <img :src="item.sortIcon" alt=""/>
        </div>
        <div class="sortRight">
          <span :class="ind===index?'colorActive':''">{{item.sortCont}}</span>
          <div class="img">
            <img v-if="ind===index" src="../../static/images/check.svg" alt="">
          </div>
        </div>
      </div>
      <!-- <div class="sortItem">
        <div class="sortLeft">
          <img alt=""/>
        </div>
        <div class="sortRight">评分最高</div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      ind:"",
      sortTypeData:[
        {
          // sortIcon:'../../static/images/sort.svg',
          sortCont:'智能排序'
        },
        {
          // sortIcon:'../../static/images/dis.svg',
          sortCont:'距离最近'
        },
        {
          // sortIcon:'../../static/images/fire.svg',
          sortCont:'智能排序'
        },
        {
          // sortIcon:'../../static/images/money.svg',
          sortCont:'起送价最低'
        },
        {
          // sortIcon:'../../static/images/leave.JPG',
          sortCont:'配送速度最快'
        },
        {
          // sortIcon:'../../static/images/star.svg',
          sortCont:'评分最高'
        }
      ]
    }
  },
  methods: {
    isCheck(ind){
      this.ind=ind
    }
  },
}
</script>
<style scoped>
  .proSortWrap{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    font-size: 12px;
  }
  .proSor{
    width: 100%;
    background: #fff;
  }
  .sortItem{
    width: 100%;
    height: 59px;
    display: flex;
    justify-content: space-around;
  }
  .sortLeft{
    width: 12%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sortLeft img{
    width: 18px;
    height: 18px;
  }
  .sortRight{
    flex: 1;
    padding-right: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #e4e4e4;
    color: #333;
  }
  .sortRight .img{
    width: 20px;
    height: 20px;
  }
  .sortRight img{
    width: 100%;
    height: 100%;
  }
  .sortRight span{
    float: 1;
  }
  .colorActive{
    color:rgb(63, 189, 230)
  }
</style>


