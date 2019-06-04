<template>
  <div class="searchCity">
    <div class="top">
      <input type="text" placeholder="输入学校, 商务楼, 地址">
      <button>提交</button>
    </div>
    <div class="searchlist">
      <ul>
        <li>
          <span>百度</span>
          <p>北京市房山区</p>
        </li>
        <li>
          <span>百度</span>
          <p>北京市房山区</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.searchCity {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #fff;
    align-items: center;
    padding:10px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    > input {
      flex: 1;
      width: 100%;
      border: 1px solid #e4e4e4;
      height: 32px;
      font-size: 15px;
      color: #333;
      border-radius: 4px;
      background-color: #fff;
      font-weight: 400;
      padding-left:10px;
      margin:0 2px 10px 0;
      box-sizing: border-box;
    }
    > button {
      width: 100%;
      height: 34px;
      border: 1px solid #3190e8;
      margin-left: 2px;
      font-size: 14px;
      color: #fff;
      border-radius: 4px;
      background-color: #3190e8;
      font-weight: 700;
      padding: 0 2px;
    }
  }
  .searchlist {
    width: 100%;
    border-top: 1px solid #eee;
    > h4 {
      height: 34px;
      line-height: 34px;
      font-size: 14px;
      color: #333;
      font-weight: 700;
      padding-left: 10px;
    }
    ul {
      width: 100%;
      background: #fff;
      li {
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        font-size: 16px;
        box-sizing: border-box;
        padding: 0 8px;
        padding-bottom:10px;
        border-bottom: 1px solid #eee;
        >span{
          height: 42px;
          line-height: 42px;
        }
        >p {
          font-size: 13px;
          color: #999;
        }
      }
    }
    >p {
      height: 46px;
      line-height: 46px;
      text-align: center;
      background: #fff;
      font-size: 16px;
      font-weight: 700;
      color: #3190e8;
      border-top: 1px solid #f5f5f5;
    }
  }
}
</style>

