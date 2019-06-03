<template>
  <p @click="goCity">首页</p>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState({
      list: state=>state.index.list
    })
  },
  methods: {
    ...mapActions({
      getCateList: 'index/getCateList'
    }),
    goCity() {
      
    }
  },
  mounted() {
    console.log('this.list...', this.list);
    this.getCateList();
  },
}
</script>

<style scoped>

</style>
