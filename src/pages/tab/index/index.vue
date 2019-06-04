<template>
  <div class="box">
    <header>

    </header>
    <section>
      <p class="shop">附近商家</p>
      <ul>
        <li class="shoppings" v-for="(val,index) in list" :key="index">
          <img class="shopimg" src="" alt="">
          <div class="rightval">
            <div class="righttop">
              <p>
                <span class="brand">品牌</span>
                <span class="name">{{val.name}}</span>
              </p>
              <p>
                <span v-for="(x,y) in val.supports" :key="y" class="icon_name">{{x.icon_name}}</span>
              </p>
            </div>
            <div class="rightsection">
              <p>
                <p class="start" style="background: red">
                  <span class="starts">☆</span>
                  <span class="starts">☆</span>
                  <span class="starts">☆</span>
                  <span class="starts">☆</span>
                  <span class="starts">☆</span>
                </p>
                <p class="starts">{{val.rating}}</p>
              </p>
              <p>

              </p>
            </div>
            <div class="rightbottom"></div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    data() {
      return {
        list: []
      }
    },
    computed: {
      ...mapState({
        list: state => state.index.list
      })
    },
    methods: {
      ...mapActions({
        getCateList: 'index/getCateList',
        getShop: 'index/getShop'
      })
    },
    async mounted() {
      this.getCateList()
      this.list =await this.getShop({
        latitude: 31.22299,
        longitude: 121.36025
      })
      console.log(this.list, 'data')
    },
  }
</script>

<style scoped>
  html,
  body,
  page {
    width: 100%;
    height: 100%;
  }

  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  section {
    width: 100%;
    border: 1px solid #ccc;
  }

  .shop {
    font-size: 16px;
    color: #999;
    padding: 5px 0 15px 5px;
  }

  .shoppings {
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  .shopimg{
    width: 63px;
    height: 63px;
    background: red;
    margin:25px 5px 25px 8px;
    float: left;
    
  }
  .rightval{
    display: inline-block;
    width: 80%;
  }
  .righttop{
    margin-top:25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .righttop,.rightsection,.rightbottom{
    width: 97%;
    height:40px;
  }
  .rightsection{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand{
    font-size: 12px;
    padding:2px 5px;
    background: #ffd930;
    color: #333;
  }
  .name{
    font-size:16px;
    font-weight: bold;
  }
  .icon_name{
    font-size: 12px;
    color: #999;
    margin-left: 5px;
  }
  .starts{
    font-size: 14px;
  }
</style>