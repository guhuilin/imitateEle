<template>
    <div class="wrap">
      <swiper class="swiper">
        <!-- <block> -->
          <swiper-item class="nav">
            <dl class="nav-dl" v-for="(item,index) in cateListDataOne" :key="index">
              <dt><img :src="item.image_url ? ('https://fuss10.elemecdn.com' + item.image_url) : ''" alt=""></dt>
              <dd>{{item.title}}</dd>
            </dl>
          </swiper-item>
          <swiper-item class="nav">
            <dl class="nav-dl" v-for="(item,index) in cateListDataTwo" :key="index">
              <dt><img :src="item.image_url ? ('https://fuss10.elemecdn.com' + item.image_url) : ''" alt=""></dt>
              <dd>{{item.title}}</dd>
            </dl>
          </swiper-item>
        <!-- </block> -->
      </swiper> 

      <div class="ListBox">
        <p class="title">
          <span class="Titleimg"><img src="../../../../static/images/商店.svg" alt=""></span>
          <span class="txt">附近商家</span>
        </p>
        <div class="shopList">
          <dl class="shopListDl">
            <dt><img src="../../../../static/images/user.png" alt=""></dt>
            <dd>
              <div class="brand"><p><span>品牌</span><span>效果演示</span></p><span>保准票</span></div>
              <div class="OnSale"><p><span>4.7</span><span>月售106单</span></p><p><span>蜂鸟专送</span><span>准时送</span></p></div>
              <div class="price_cilometre"><p><span>￥20起送/配送费约￥5</span><span>1116.2公里/</span><span>11小时58分钟</span></p></div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  data(){
    return {
      // imgSrc:'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg'
    }
  },
  computed: {
    ...mapState({
      //导航分类一部分
      cateListDataOne: state => {
        const Data1 = state.index.CateListData.slice(0,8);
        // console.log(Data1,'data1')
        return Data1;
      },
      //导航分类二部分
      cateListDataTwo: state => {
        const Data2 = state.index.CateListData.slice(8,16);
        // console.log(Data1,'data1')
        return Data2;
      }
    })
  },
  methods: {
    ...mapActions({
      getCateList: 'index/getCateList',//导航分类
    }),
    ...mapMutations({
      CateList:'index/CateList' //导航分类
    })
  },
  async created(){
    this.getCateList()
  }
  // mounted() {
    // console.log('this.list...', this.list);
    // this.getCateList();
    // console.log(this.getCateList(),'11')
  // }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.wrap{
  width: 100%;
  height: 100%;
  background: #ccc;
}
/* 导航轮播 */
.swiper{
  width: 100%;
  height: 200px;
}
.nav{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.nav-dl{
  width: 94.2px;
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top:1px;
  vertical-align: middle;
}
.nav-dl>dd{
  font-size: 13px;
  padding:5px 0px;
}
.nav-dl>dt>img{
  width: 50px;
  height: 50px;
  padding-top:10px;
}
/* 列表 */
.ListBox{
  width: 100%;
  background: #fff;
  margin-top:10px;
}
.title{
  width: 100%;
  color:#999;
  font-size: 14px;
  padding:8px 0 0 0;
  display: flex;
  align-items: center;
}
.txt{
  margin-left:10px;
}
.Titleimg>img{
  width: 15px;
  height: 15px;
  margin-left:10px;
  margin-top:5px;
}
.shopList{
  width: 100%;
  height: 100%;
  background: #fff;
  /* border-bottom:solid 1px #f1f1f1; */
}
.shopListDl{
  display: flex;
  font-size: 13px;
  padding:15px 5px 15px 10px;
  box-sizing: border-box;
  border-bottom:solid 1px #f1f1f1;
}
.shopListDl>dt>img{
  width: 63px;
  height: 63px;
  background: #f00;
}
.shopListDl>dd{
  margin-left:8px;
  /* display: flex; */
}
.brand{
  width: 100%;
  background: orange;
  margin-top:5px;
  display: flex;
  justify-content: space-between;
}
/* .brand>span:nth-child(1){

} */
.OnSale{
  width: 100%;
  background:skyblue;
  display: flex;
  margin-top:5px;
}
.price_cilometre{
  width: 100%;
  background: sandybrown;
  margin-top:5px;
}
</style>
