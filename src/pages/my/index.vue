<template>
  <div class="mybox">
     <header>
       <div class="myChild">
          <div> 
              <img src="../../../static/images/my.png" alt="" class="myurl">
              <div class="myright">
                <p class="myrightTop">登陆/注册</p>
                <p class="myrightBottom"><img src="../../../static/images/shouji.png" alt="" class="myphone"> 暂无绑定手机号</p>
              </div>
             </div>
            <span>
              <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
            </span>
       </div>
     </header>
     <section>
       <ul class="sectionUl">
         <li class="sectionLi">
           <p class="price">0.00<span class="priceRmb">元</span></p>
           <p class="mybalance">我的余额</p>
         </li>
         <li class="sectionLi">
            <p class="price red">0<span class="priceRmb">个</span></p>
           <p class="mybalance">我的优惠</p>
         </li>
         <li class="sectionLi">
            <p class="price green">0<span class="priceRmb">分</span></p>
           <p class="mybalance">我的积分</p>
         </li>
       </ul>
       <ul class="sectionShop">
         <li class="sectionLis">
           <div class="myChild" @click="balance">
             <div>
                <img src="../../../static/images/balance.png" alt="" class="mylittleurl">
                <span class="myVal">我的订单</span>
             </div>
             <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
           </div>
         </li>
         <li class="sectionLis">
            <div class="myChild">
                <div>
                   <img src="../../../static/images/Integral.png" alt="" class="mylittleurl">
                   <span class="myVal">积分商城</span>
                </div>
                <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
              </div>
         </li>
         <li class="sectionLis">
            <div class="myChild"  @click="memBer">
                <div>
                   <img src="../../../static/images/Ancrown.png" alt="" class="mylittleurl">
                   <span class="myVal">饿了么会员卡</span>
                </div>
                <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
              </div>
         </li>
       </ul>
       <ul class="sectionShop">
          <li class="sectionLis">
            <div class="myChild">
              <div>
                 <img src="../../../static/images/blue.png" alt="" class="mylittleurl">
                 <span class="myVal">服务中心</span>
              </div>
              <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
            </div>
          </li>
          <li class="sectionLis">
             <div class="myChild">
                 <div>
                    <img src="../../../static/images/eatFood.png" alt="" class="mylittleurl">
                    <span class="myVal">下载饿了么APP</span>
                 </div>
                 <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
               </div>
          </li>
        </ul>
     </section>
  </div>
</template>
<script>
  export default {
    methods:{
      balance(){
        wx.switchTab({
          url: '/pages/order/main'
        })
      },
      memBer(){
        wx.navigateTo({
          url: '/pages/Member/main'
        })
      }
    }
  }
</script>
<style scoped>
  html,
  body {
    width:100%;
    height: 100%;
  }
  .mybox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  header{
    width: 100%;
    height: 100px;
    background: #3190e8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .myChild{
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .myurl{
    width: 58px;
    height: 58px;
    border-radius: 50%;
    float: left;
    background: white;
  }
  .myright{
    float: left;
    margin-left:10px;
    font-size: 14px;
    color:white;
  }
  .myrightTop{
    font-weight: bold;
    font-size: 20px;
    margin-top:5px;
    margin-bottom:5px;
  }
  .myphone{
    width: 20px;
    height: 18px;
    float: left;
    margin-top:3px;
  }
  .myArrow{
    width: 20px;
    height: 16px;
  }
  section{
    flex:1;
    background: #f5f5f5;
  }
  .sectionUl{
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .sectionLi{
    width: 33%;
    height: 100%;
    border-right:1px solid #f5f5f5;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .price{
    font-size: 24px;
    font-weight: bold;
    color:#f90;
    width: 100%;
    text-align: center;
  }
  .priceRmb{
    font-size: 14px;
    font-weight: 200;
    color:black;
  }
  .mybalance{
    font-size: 14px;
  }
  .red{
    color:#ff5f3e;
  }
  .green{
    color:#6ac20b;
  }
  .sectionShop{
    margin-top:10px;
    width: 100%;
    background: white;
  }
  .sectionLis{
    width: 100%;
    height: 45px;
    border-bottom:1px solid #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mylittleurl{
    width: 16px;
    height: 16px;
  }
  .myVal{
    font-size: 16px;
    margin-left:10px;
  }
</style>