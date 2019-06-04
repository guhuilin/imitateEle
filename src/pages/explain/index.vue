<template>
    <div class="orderonline">
        <div class="countdown">
            <p>支付剩余时间</p>
            <div class="timexxx">
                <span>00</span>
                <b>:</b>
                <span>{{m<10?'0'+m:m}}</span>
                <b>:</b>
                <span>{{s<10?'0'+s:s}}</span>
            </div>
        </div>
        <div class="ordertype">
            <p>选择支付方式</p>
            <div>支付宝</div>
            <div>微信</div>
        </div>
        <div class="btn">
            <button>确认支付</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                m: 14,
                s: 59
            }
        },
        created() {
            this.getCountdown();

        },
        methods: {
            getCountdown() {
                let timer = setInterval(() => {
                    if (this.m == 0 && this.s == 0) {
                        this.m = '00';
                        this.s = '00';
                        clearInterval(timer);
                    } else if (this.m >= 0) {
                        if (this.s > 0) {
                            this.s--;
                        } else if (this.s == 0) {
                            this.m--;
                            this.s = 59;
                        }
                    }
                }, 1000);
            },
            addZero(i) {
                return i<10 ? '0'+i : i;
            }
        }
    }
</script>

<style scoped>
    .orderonline {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }

    .countdown {
        width: 100%;
        height: 150px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .countdown>p {
        font-size: 14px;
        color: #999;
    }

    .timexxx {
        display: flex;
    }

    .timexxx>span,
    .timexxx>b {
        font-size: 38px;
    }

    .timexxx>b {
        margin: 0 5px;
    }

    .ordertype {
        width: 100%;
    }

    .ordertype>p {
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        padding-left: 15px;
    }

    .ordertype>div {
        width: 100%;
        height: 80px;
        line-height: 80px;
        background: #fff;
        border-bottom: 1px solid #f5f5f5;
    }

    .btn {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        color: #fff;
        background: rgb(63, 221, 63);
        border-radius: 8px;
        border: 0;
        outline: 0;
        font-size: 16px;
        font-weight: 700;
    }
</style>