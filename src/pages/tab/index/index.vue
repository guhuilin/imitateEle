<template>
    <div class="wrap">
      <swiper class="swiper">
        <!-- <block> -->
          <swiper-item class="nav">
            <dl class="nav-dl" v-for="(item,index) in cateListDataone" :key="index">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>{{item.title}}</dd>
            </dl>
            <!-- <dl class="nav-dl">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>甜品饮品</dd>
            </dl>
            <dl class="nav-dl">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>商超便利</dd>
            </dl>
            <dl class="nav-dl">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>美食</dd>
            </dl>
            <dl class="nav-dl">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>简餐</dd>
            </dl>
            <dl class="nav-dl">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>新店特惠</dd>
            </dl>
            <dl class="nav-dl">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>新店特惠</dd>
            </dl>
            <dl class="nav-dl">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>新店特惠</dd>
            </dl> -->
            <!-- <image src="{{item}}" class="slide-image" width="355" height="150"/> -->
          </swiper-item>
          <swiper-item class="w2">
            222
            <!-- <image src="{{item}}" class="slide-image" width="355" height="150"/> -->
          </swiper-item>
        <!-- </block> -->
      </swiper>      
      <!-- <div class="nav">
        
      </div> -->
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  data(){
    return {}
  },
  computed: {
    ...mapState({
      //导航分类一部分
      cateListDataone: state => {
        const Data1 = state.index.CateListData.slice(0,8);
        // console.log(Data1,'data1')
        return Data1;
      }
      //导航分类二部分
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
.swiper{
  width: 100%;
  height: 200px;
  /* background: #f00; */
}
.w2{
  background:#00f;
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

</style>
