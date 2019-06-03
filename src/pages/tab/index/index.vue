<template>
    <div class="wrap">
      <swiper class="swiper">
        <!-- <block> -->
          <swiper-item class="nav">
            <dl class="nav-dl">
              <dt><img src="../../../../static/images/user.png" alt=""></dt>
              <dd>甜品饮品</dd>
            </dl>
            <dl class="nav-dl">
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
            </dl>
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
import {mapState, mapActions} from 'vuex';

export default {
  
  computed: {
    ...mapState({
      list: state=>state.index.list
    })
  },
  methods: {
    ...mapActions({
      getCateList: 'index/getCateList'
    })
  },
  mounted() {
    // console.log('this.list...', this.list);
    this.getCateList();
    // console.log(this.getCateList(),'11')
  }
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
  background: #ccc;
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
