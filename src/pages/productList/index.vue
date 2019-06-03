<template>
  <div class="proWrapper">
    <div class="topBar">
      <div class="typeWrap">
        <div :class="flag==1?'proType proTypeActive':'proType'" @click="()=>{this.isShowFn(1)}">
          <div>{{title}}</div>
          <div :class="flag==1?'select selectActive':'select selectDefault'"></div>
        </div>
        <div :class="flag==2?'proType proTypeActive':'proType'" @click="()=>{this.isShowFn(2)}">
          <div>排序</div>
          <div :class="flag==2?'select selectActive':'select selectDefault'"></div>
        </div>
        <div :class="flag==3?'proType proTypeActive':'proType'" @click="()=>{this.isShowFn(3)}">
          <div>筛选</div>
          <div :class="flag==3?'select selectActive':'select selectDefault'"></div>
        </div>
      </div>
      <div class="comProType">
        <ProListType v-if="flag==1"/>
        <ProSort v-if="flag==2"/>
        <ProFilter v-if="flag==3"/>
      </div>
    </div>
    <div class="proListWrap">
      <div class="itemWrap" v-for="(item,index) in listData.listData" :key="index">
        <div class="item">
          <div class="itelLeft">
            <img :src="detailImgUrl+item.image_path" alt=""/>
          </div>
          <div class="itemRight">
            <div class="itemTitle">
              <h3>
                <span>品牌</span>
                <span>{{item.name}}</span>
              </h3>
              <div class="titleRight">
                <span>保</span>
                <span>准</span>
                <span>票</span>
              </div>
            </div>
            <div class="itemCenter">
              <div>
                <div></div>
                <span class="evaluateColor">{{item.rating}}</span>
                <span class="monthColor">月售{{item.recent_order_num}}单</span>
              </div>
              <div class="centerRight">
                <span>益鸟专送</span>
                <span>准时达</span>
              </div>
            </div>
            <div class="itembottom">
              <div>
                <div>￥{{item.float_minimum_order_amount}}起送 / </div>
                <span>配送费约￥{{item.float_delivery_fee}}</span>
              </div>
              <div class="bottomRight">
                <span>{{item.distance}} / </span>
                <span>{{item.order_lead_time}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="itemWrap">
        <div class="item">
          <div class="itelLeft">
            <img src="" alt="" />
          </div>
          <div class="itemRight">
            <div class="itemTitle">
              <h3>
                <span>品牌</span>
                <span>效果演示</span>
              </h3>
              <div class="titleRight">
                <span>保</span>
                <span>准</span>
                <span>票</span>
              </div>
            </div>
            <div class="itemCenter">
              <div>
                <div>品牌</div>
                <span>效果演示</span>
              </div>
              <div class="centerRight">
                <span>益鸟专送</span>
                <span>准时达</span>
              </div>
            </div>
            <div class="itembottom">
              <div>
                <div>￥5起送/</div>
                <span>配送费约￥5</span>
              </div>
              <div class="bottomRight">
                <span>646.4公里/</span>
                <span>7小时5分钟</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import ProListType from '@/components/proListType'
import ProSort from '@/components/proSort'
import ProFilter from '@/components/proFilter'

export default {
  computed: {
    ...mapState({
      listData:state=>state.proList
    })
  },
  data(){
    return {
      title:"甜品饮品",
      flag:0,
      detailImgUrl:'//elm.cangdu.org/img/'
    }
  },
  components: {
    ProListType,
    ProSort,
    ProFilter
  },
  created(){
    // wx.setNavigationBarTitle({
    //   title: this.title
    // })
  },
  async mounted() {
    await this.getProList()
    // console.log('listData',this.listData.listData)
  },
  methods: {
    ...mapActions({
      getProList:"proList/getProList"
    }),
    isShowFn(flag){
      this.flag = flag;
      console.log('tag', this.flag)
    }
  }
}
</script>

<style>
page{
  width: 100%;
  height: 100%;
}
.proWrapper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
}
.topBar{
  width: 100%;
  height: 39px;
  padding: 3px 0;
  color: #333;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
}
.typeWrap{
  height: 100%;
  display: flex;
  align-items: center;
}
.proType{
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;
}
.proType:last-child{
  border: 0;
}
.proTypeActive{
  color: #3190e8;
}
.select{
  width: 0;
  height: 0;
  border: 6px solid transparent;
  position: relative;
  left: 4px;
}
.selectDefault{
  border-top-color: #666;
  top: 4px;
}
.selectActive{
  border-bottom-color: #3190e8;
  bottom: 4px;
}
.comProType{
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 66;
}
.proListWrap{
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}
.itemWrap{
  width: 100%;
  padding: 15px 8px;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
}
.item{
  width: 100%;
  display: flex;
}
.item .itelLeft{
  width: 64px;
  height: 64px;
  margin-right: 8px;
  box-sizing: border-box;
}
.itelLeft img{
  width: 100%;
  height: 100%;
}
.itemRight{
  flex: 1;
}
.itemRight>div{
  justify-content: space-between;
}
.itemTitle,.itemCenter{
  padding-bottom: 10px;
}
.itemTitle,.itemCenter,.itembottom{
  display: flex;
}
.itemTitle>h3,.itemCenter>div,.itembottom>div{
  display: flex;
}
.itemTitle h3 span:first-child{
  display: flex;
  font-size: 12px;
  font-weight: 600;
  height: 16px;
  padding: 0 3px;
  background: #ffd930;
  margin-right: 5px;
  border-radius: 3px;
  align-items: center;
}
.itemTitle h3 span:last-child{
  position: relative;
  top: -2px;
  font-weight: 600;
  font-size: 16px;
}
.itemTitle .titleRight{
  font-size: 12px;
  color: #333;
  display: flex;
}
.titleRight span{
  font-size: 12px;
  padding: 0;
  height: 14px;
  line-height: 14px;
  border: 1px solid #ccc;
  margin-right: 1px;
  border-radius: 3px;
}
.itemCenter>div{
  font-size: 10px;
}
.itemCenter .centerRight span:first-child{
  height: 12px;
  background: #3190e8;
  padding: 0 2px;
  font-size: 10px;
  border-radius: 2px;
  color: white;
  margin-right: 2px;
}
.itemCenter .centerRight span:last-child{
  height: 10px;
  color: #3190e8;
  font-size: 10px;
  border: solid 1px #3190e8;
  border-radius: 1px;
  padding: 0 2px;
}
.evaluateColor{
  color: #ff6000;
  margin: 0 5px;
  font-weight: 400;
}
.monthColor{
  color:#666;
}
.itembottom{
  font-size: 12px;
}
.itembottom .bottomRight span:last-child{
  color: #3190e8;
}
</style>
