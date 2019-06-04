<template>
    <div class="shopWrap">
        <div class="shopHeader">
            <span class="active">商品</span>
            <span>评价</span>
        </div>
        <div class="shopMain">
            <!-- 左侧 -->
            <ul class="shopLeft">
                <li v-for="(item,index) in ShopListData" :key="index">{{item.name}}</li>
            </ul>
            <!-- 右侧 -->
            <ul class="shopRight">
                <!-- <p class="rightTitle"  v-for="(item,index) in ShopListData" :key="index">
                    {{item.name}}
                    <span>{{item.description}}</span>
                </p> -->
                <li class="con"  v-for="(item,index) in ShopListData" :key="index">
                    <div class="img"><img src="../../../../static/images/user.png" alt=""></div>
                    <div class="rightCon">
                        <h4 class="h4">我问问</h4>
                        <span class="spn1">大大大11</span>
                        <p class="p1">月售404份 好评率85%</p>
                        <span class="spn2">优惠券</span>
                        <p class="p2"><span>￥<span>20</span>起</span><span>选规格</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <span><img src="../../../../static/images/user.png" alt=""></span>
            <span>￥0.00</span>
            <span>起送价</span>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex';
export default {
    data(){
        return{}
    },
     computed: {
        ...mapState({
            ShopListData:state => state.index.ShopListData
        })
    },
    methods: {
        ...mapActions({
            getShopList: 'index/getShopList',//商品
        }),
        ...mapMutations({
            ShopList:'index/ShopList'//商品
        })
    },
    async created(){
        this.getShopList()
    }
}
</script>
<style scoped>
/* *{
    margin: 0;
    padding: 0;
}
html,body{
    width: 100%;
    height: 100%;
} */
.shopWrap{
    width: 100%;
    height: 100%;
    background: #eee;
}
.shopHeader{
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px #ccc;
}
.shopHeader>span{
    flex:1;
    text-align: center;
    font-size: 16px;
}
/* .active{
    color:#3190e8;
    border-bottom: #3190e8 solid 2px;
} */
.shopMain{
    width: 100%;
    height: 100%;
    /* background: #f00; */
    display: flex;
}
.shopLeft{
    width: 25%;
    background: #ccc;
}
.shopLeft>li{
    width: 100%;
    height: 65px;
    line-height: 65px;
    padding:0 10px;
    box-sizing: border-box;
    color:#666;
    font-size: 15px;
    border-bottom: solid 1px #f1f1f1;
    /* background: #f00; */
}
.liActive{
    border-left:solid 4px #3190e8;
    background: #fff;
    font-weight: 700;
}
.shopRight{
    width: 75%;
    height: 100%;
    background: #fff;
}
.con{
    width: 100%;
    height: 140px;
    display: flex;
    font-size: 13px;
    border-bottom: solid 1px #000;
}
.img>img{
    width: 50px;
    height: 50px;
    padding:8px 0 0 10px;
}
.rightTitle{
    width: 100%;
    height: 50px;
    background: #eee;
    font-weight: bold;
    font-size: 18px;
    color:#666;
    line-height: 50px;
    padding:0 10px;
    box-sizing: border-box;
}
.rightTitle>span{
    font-size: 12px;
    font-weight: 0;
    margin-left:10px;
}

.rightCon{
    flex:1;
    margin-left:10px;
    display: flex;
    flex-direction: column;
    line-height: 25px;
}
.h4{
    font-size: 18px;
    font-weight: bold;
}
.spn1{
    color:#ccc;
    font-size: 14px;
}
.spn2{
    display: block;
    width: 40px;
    height: 20px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    border:solid 1px orangered;
    color:orangered;
    border-radius: 10px;
    margin-top:5px;
}
.p2{
    width: 100%;
    margin-top:5px;
    display: flex;
    justify-content: space-between;
}
.p2>span:nth-child(1)>span{
    color:orangered;
    font-size: 18px;
    font-weight: 600;
}
.p2>span:nth-child(2){
    display: block;
    width: 50px;
    height: 25px;
    color:#fff;
    background:#00f;
    text-align: center;
    line-height: 25px;
    margin-right:10px;
    border-radius: 5px;
}
.footer{
    width: 100%;
    height: 50px;
    background: #333;
    position: fixed;
    bottom: 0;
    display: flex;
    /* position: relative; */
}
.footer>span:nth-child(1)>img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.footer>span:nth-child(2){
    line-height: 50px;
    color:#fff;
    font-size: 20px;
    margin-left:10px;
}
.footer>span:nth-child(3){
    display: block;
    width: 40%;
    height:50px;
    font-size: 20px;
    font-weight: bold;
    color:#fff;
    text-align: center;
    line-height: 50px;
    background: #ccc;
    position: fixed;
    right:0;
}
</style>
