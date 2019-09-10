<template>
    <div>
        <!-- 这是轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key='item.url'>
                <img :src="item.img" alt="">
            </mt-swipe-item>
            
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../imgs/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../imgs/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../imgs/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../imgs/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../imgs/menu5.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../imgs/menu6.png" alt="">
                    <div class="mui-media-body">Phone</div></a></li>
           
        </ul> 
        
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                lunbotuList: [] // 轮播图的数组
                };
        },
        created() {
            this.getlunbotu();
        },
        methods: {
            async getlunbotu(){
                var url = '/src/json/homeslide.json'
                this.$http.get(url).then(result => {
                    var data = result.body;
                    if(data.status === 0){
                        this.lunbotuList = data.message;
                        console.log(data)
                        Toast('lunbo ok!')
                    }
                    else{
                        Toast(data.message);
                        return;
                    }
                })
                // this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
                //     if(result.body.status === 0){
                //         this.lunbotuList = result.body.message;
                //         console.log(result.body)
                //         Toast('ok')
                //     }
                //     else{
                //         Toast('Fail')
                //     }
                // })
            // async getlunbotu() {
            // // 获取轮播图的方法
            // const { data } = await this.$http.get("http://vue.studyit.io/api/getlunbo");
            // if (data.status === 0){ this.lunbotuList = data.message;}
            // else {Toast('加载轮播图失败')}
            // }
            }
            
        },
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
    }

    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }

        &:nth-child(2){
            background-color: cyan;
        }

        &:nth-child(3){
            background-color: blue;
        }
    }

    img{
        width: 100%;
        height: 100%;
    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;

        img{
            width: 60px;
            height: 60px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0px;
    }
</style>


