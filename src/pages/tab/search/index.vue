<template>
  <div class="search">
    <div class="top">
      <input type="text" placeholder="请输入商家或美食名称">
      <button>提交</button>
    </div>
    <div class="searchlist">
      <h4>搜索历史</h4>
      <ul>
        <li>
          <span>百度</span>
          <span>
            <img src="/static/images/delete.png" alt="">
          </span>
        </li>
      </ul>
      <p>清空搜索历史</p>
      
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  .top {
    width: 100%;
    height: 48px;
    display: flex;
    background: #fff;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    > input {
      flex: 1;
      border: 1px solid #e4e4e4;
      height: 32px;
      font-size: 15px;
      color: #333;
      border-radius: 4px;
      background-color: #f2f2f2;
      font-weight: 700;
      padding: 0 2px;
    }
    > button {
      width: 100px;
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
    > h4 {
      height: 46px;
      line-height: 46px;
      font-size: 15px;
      color: #333;
      font-weight: 700;
      padding-left: 10px;
    }
    ul {
      width: 100%;
      background: #fff;
      li {
        height: 46px;
        line-height: 46px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        font-size: 16px;
        box-sizing: border-box;
        padding: 0 8px;
        border-bottom:1px solid #f5f5f5;
        span {
          height: 46px;
          line-height: 46px;
          img {
            width: 22px;
            height: 22px;
            vertical-align: middle;
          }
        }
      }
    }
    p {
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
