<template>
    <div class="memberBox">
        <p class="shopmember">为账户 购买会员</p>
        <div class="member">
            <div class="memberVal">
                <div class="myChild">
                    <p class="privilege">会员特权</p>
                    <div class="Explain">
                        <span>会员说明</span>
                        <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
                    </div>
                </div>
            </div>
            <div class="price">
                <div class="myChilds">
                    <img src="../../../static/images/sheng.png" alt="" class="sheng">
                    <div class="Delivery">
                        <p class="deliverys">减免配送费</p>
                        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                        <p>蜂鸟专送专享</p>
                    </div>
                </div>
            </div>
            <div class="price">
                <div class="myChilds">
                    <img src="../../../static/images/email.png" alt="" class="sheng">
                    <div class="Delivery">
                        <p class="deliverys">减免配送费</p>
                        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                        <p>蜂鸟专送专享</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="openMember">
            <p class="openber">开通会员</p>
            <div class="openbottom">
                <div class="myChild">
                    <p class="openprice">
                        <span>1个月</span>
                        <span class="origin">￥20</span>
                    </p>
                    <p class="buy"  @click="explain">购买</p>
                </div>
            </div>
        </div>
        <div class="exchange">
            <div class="myChild">
                <p class="openber">兑换会员</p>
                <div class="Explain">
                    <span>使用卡号卡密</span>
                    <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
                </div>
            </div>
        </div>
        <div class="exchange">
            <div class="myChild">
                <p class="openber">购买记录</p>
                <div class="Explain">
                    <span>开发票</span>
                    <img src="../../../static/images/jiantouh.png" alt="" class="myArrow">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            explain() {
                console.log(456)
                wx.navigateTo({
                    url: '/pages/explain/main'
                })
            }
        }
    }
</script>

<style scoped>
    .memberBox {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }

    .shopmember {
        width: 100%;
        height: 45px;
        line-height: 45px;
        padding-left: 20px;
        font-size: 14px;
        color: #666;
    }

    .member {
        width: 100%;
        background: white;
    }

    .myArrow {
        width: 20px;
        height: 16px;
    }

    .memberVal {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .myChild {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .myChilds {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .privilege {
        font-size: 16px;
    }

    .Explain {
        width: 170px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        color: #999;
    }

    .price {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sheng {
        width: 45px;
        height: 61px;
        margin-right: 15px;
    }

    .Delivery {
        width: 70%;
        font-size: 12px;
        color: #999;
    }

    .deliverys {
        font-size: 16px;
        color: black;
    }

    .openMember {
        width: 100%;
        background: white;
        margin-top: 10px;
    }

    .openber {
        font-size: 16px;
        width: 100%;
        height: 45px;
        line-height: 45px;
        color: #333;
        font-weight: 400;
        border-bottom: 1px solid #eee;
        padding-left: 20px;
    }

    .openbottom {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buy {
        width: 60px;
        height: 30px;
        border: 1px solid #f60;
        color: #f60;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
    }

    .openprice {
        font-size: 16px;
    }

    .origin {
        color: #f60;
    }

    .exchange {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        background: white;
    }
</style>