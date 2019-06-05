<template>
  <div class="wrap">
    <div class="top"></div>
    <div class="shoplist">
      <h5 class="shoplist_title">附近商家</h5>
      <ul>
        <li class="shop_li" v-for="(item,index) in shopList" :key="index" @click="Jump(item.id)">
          <div class="pic">
            <image :src="picSrc+item.image_path" />
          </div>
          <div class="content">
            <div class="content_title">
              <p>
                <span>品牌</span>
                <span>{{item.name}}</span>
              </p>
              <p>
                <span v-for="(val,ind) in item.supports" :key="ind">{{val.icon_name}}</span>
              </p>
            </div>
            <div class="sales_status">
              <div>
                <span class="star">★★★★★</span>
                <span class="grade">{{item.rating}}</span>
                <span class="scale">月售{{item.recent_order_num}}单</span>
              </div>
              <div class="tags">
                <span v-if="item.delivery_mode !== undefined">{{item.delivery_mode.text}}</span>
                <span v-if="item.supports !== undefined">{{item.supports[1].name}}</span>
              </div>
            </div>
            <div class="shop_item_info">
              <div>￥{{item.float_minimum_order_amount}}起送 / {{item.piecewise_agent_fee&&item.piecewise_agent_fee.tips}}</div>
              <div>
                <span style="color:#999">{{item.distance}}</span> /
                <span style="color: #3190e8">{{item.order_lead_time}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    data() {
      return {
        picSrc: 'https://elm.cangdu.org/img/',
        list:[]
      }
    },
    computed: {
      ...mapState({
        shopList: state => state.Index.shopList
      })
    },
    async created() {
      await this.getShopList()
    },
    methods: {
      ...mapActions({
        getShopList: 'index/getShopList'
      }),
      Jump(v) {
        wx.navigateTo({
          url: '/pages/shopping/main?geohash=31.22299,121.36025&id=' + v
        })
      }
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    background: #eee;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    font-size: 12px;
  }

  .top {
    height: 200px;
    background: #fff;
  }

  .shoplist {
    margin-top: 10px;
    border-top: 1px solid #ccc;
    background: #fff;
    box-sizing: border-box;
  }

  .shoplist_title {
    height: 30px;
    font-size: 12px;
    padding-left: 10px;
    line-height: 30px;
    color: #999;
    margin-bottom: 5px;
  }

  .shop_li {
    padding: 10px 10px;
    display: flex;
    border-bottom: 1px solid #f1f1f1;
  }

  .pic image {
    width: 60px;
    height: 60px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }

  .content>div {
    display: flex;
  }

  .content_title {
    display: flex;
    justify-content: space-between;
  }

  .content_title p:first-child span:first-child {
    background: #ffd930;
    font-size: 10px;
    font-weight: 600;
    margin-right: 5px;
    padding: 0 2px;
  }

  .content_title p:first-child span:last-child {
    font-weight: bold;
    font-size: 14px;
  }

  .content_title p:last-child {
    font-size: 10px;
    color: #999;
  }

  .sales_status {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
  }

  .sales_status>div {
    display: flex;
    color: #666;
  }

  .star {
    font-size: 12px;
    color: darkorange;
  }

  .grade {
    font-size: 12px;
    color: orangered;
    margin: 0 4px;
  }

  .tags span {
    border: solid 1px #3190e8;
    margin: 0 1px;
    font-size: 9px;
    padding: 0 2px;
    color: #3190e8;
    border-radius: 2px;
  }

  .tags span:first-child {
    color: #fff;
    background: #3190e8;
  }

  .shop_item_info {
    margin-top: 8px;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    color: #666;
  }
</style>