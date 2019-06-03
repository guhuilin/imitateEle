<template>
  <div class="proSortWrap">
    <div class="sortItem">
      <div class="sortLeft">
        <img alt=""/>
      </div>
      <div class="sortRight">智能排序</div>
    </div>
    <div class="sortItem">
      <div class="sortLeft">
        <img alt=""/>
      </div>
      <div class="sortRight">距离最近</div>
    </div>
    <div class="sortItem">
      <div class="sortLeft">
        <img alt=""/>
      </div>
      <div class="sortRight">销量最高</div>
    </div>
    <div class="sortItem">
      <div class="sortLeft">
        <img alt=""/>
      </div>
      <div class="sortRight">起送价最低</div>
    </div>
    <div class="sortItem">
      <div class="sortLeft">
        <img alt=""/>
      </div>
      <div class="sortRight">配送速度最快</div>
    </div>
    <div class="sortItem">
      <div class="sortLeft">
        <img alt=""/>
      </div>
      <div class="sortRight">评分最高</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .proSortWrap{
    width: 100%;
    background: #fff;
    font-size: 14px;
  }
  .sortItem{
    width: 100%;
    height: 59px;
    display: flex;
    justify-content: space-around;
  }
  .sortLeft{
    width: 20%;
  }
  .sortRight{
    flex: 1;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #e4e4e4;
    color: #333;
  }
</style>


