<template>
    <div class="shopBox">
       <header></header>
       <section></section>
       <footer></footer>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {
                id: ''
            }
        },
        onLoad: function (option) {
            this.id = option.id;
            this.getShopDate({
                shopid: this.id
            })
        },
        computed: {
            ...mapState({
                shopDate: state => state.Index.shopDate
            })
        },
        methods: {
            ...mapActions({
                getShopDate: 'Index/getShopDate'
            })
        }
    }
</script>

<style scoped>
    .shopBox{
        width: 100%;
        height: 100%;
    }
</style>