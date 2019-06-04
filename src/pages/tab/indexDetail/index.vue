<template>
    <div class="shopWrap">
        <div class="shopHeader">
            <span class="active">商品</span>
            <span>评价</span>
        </div>
        <div class="shopMain">
            <ul class="shopLeft">
                <li class="liActive">热销榜</li>
                <li>热搜榜</li>
                <li>面条</li>
                <li>肯德基</li>
                <li>麦当劳</li>
                <li>面包</li>
            </ul>
            <ul class="shopRight">
                <p class="rightTitle">热销榜<span>是的分身乏术放</span></p>
                <li class="con">
                    <div class="img"><img src="../../../../static/images/user.png" alt=""></div>
                    <div>
                        <h4>我问问</h4>
                        <span>发111</span>
                        <p>月售404份 好评率85%</p>
                        <span>好</span>
                        <p><span>￥20</span>起<span>选规格</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
.active{
    color:#3190e8;
    border-bottom: #3190e8 solid 2px;
}
.shopMain{
    width: 100%;
    height: 100%;
    background: #f00;
    display: flex;
}
.shopLeft{
    width: 25%;
    height: 100%;
    background: #ccc;

}
.shopLeft>li{
    width: 100%;
    height: 65px;
    /* background: #fff; */
    /* border-bottom: solid 1px #f00; */
    line-height: 65px;
    padding:0 10px;
    box-sizing: border-box;
    color:#666;
    font-size: 15px;
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
    height: 100px;
    background: #f00;
    display: flex;
    font-size: 13px;
}
.img>img{
    width: 50px;
    height: 50px;
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
</style>
