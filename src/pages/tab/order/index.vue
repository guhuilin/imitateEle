<template>
  <div class="order">
    <div class="top">
      <p>
        <span>当前定位城市:</span>
        <b>定位不准时, 请在城市列表中选择</b>
      </p>
      <div>
        <span>北京</span>
        <span @click="goLocation">
          <img src="/static/images/right.png" alt>
        </span>
      </div>
    </div>
    <div class="hot">
      <p>热门城市</p>
      <div class="hotcity">
        <span v-for="(item, ind) in hotCity" :key="ind">{{item.name}}</span>
      </div>
    </div>
    <div class="letter" v-for="(value, key, index) in letterCity" :key="index">
      <p>{{ key }} <span  :class="[key === 'A'?'show':'hide']">(按字母排序)</span></p>
      <div class="everycity">
        <span  v-for="(val, ind) in value" :key="ind">{{val.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      hotCity: [],
      letterCity:{}
    }
  },

  async created() {
    this.hotCity = await this.getHotCity('hot');
    this.letterCity = await this.getLetterCity('group');
  },
  mounted() {
    
  },
  computed: {
  },
  methods: {
    ...mapActions({
      getHotCity: 'index/getHotCity',
      getLetterCity: 'index/getLetterCity'
    }),
    goLocation() {
      wx.navigateTo({
        url:'../city/main'
      })
    }
  }


};
</script>



<style lang="scss" scoped>
.order {
  width: 100%;
  background: #f5f5f5;
}
.top {
  width: 100%;
  background: #fff;
  margin-bottom: 14px;
  > p {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    > span {
      font-size: 15px;
      color: rgb(100, 98, 98);
    }
    > b {
      font-size: 15px;
      color: #999;
      font-weight: 700;
    }
  }
  > div {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #f5f5f5;
    span {
      color: #3190e8;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
.hot,
.letter {
  width: 100%;
  background: #fff;
  margin-bottom: 14px;
  p {
    width: 100%;
    height: 36px;
    font-size: 15px;
    line-height: 36px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    padding-left: 10px;
    color: rgb(100, 98, 98);
    span{
      font-size: 14px;
      color:#999;
    }
  }
  > .hotcity,
  .everycity {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    span {
      width: 25%;
      height: 42px;
      line-height: 42px;
      text-align: center;
      font-size: 16px;
      padding: 0 4px;
      overflow:hidden;
      white-space: nowrap; 
      text-overflow: ellipsis;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
    }
  }
  > .hotcity span {
    color: #3190e8;
  }
  > .everycity span {
    color: rgb(100, 98, 98);
  }
}
.show{
  display: inline-block;
}
.hide {
  display: none;
}
</style>