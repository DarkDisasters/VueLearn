<template>
    <div>
        <h1>这是app组件</h1>


        <mt-button type="danger" icon = "more" @click="show">default</mt-button>
        <mt-button type="danger" size = "small" plain>default</mt-button>

        <router-link to='/account'>Account</router-link>
        <router-link to='/goodslist'>GoodsList</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    //导入Toast 组件
    import {Toast} from 'mint-ui'

    export default {
        data(){
            return {
                toastInstance: null
            };
        },
        created(){
            this.getList()
        },
        methods: {
            getList(){      
                //模拟获取列表的 Ajax方法
                //在获取数据之前，立即 弹出Toast 提示用户， 正在加载数据
                this.show();

                setTimeout(() => {
                    //当3s过后，数据获取回来了，要把Toast移除
                    this.toastInstance.close()
                }, 3000)
            },
            show(){
                this.toastInstance = Toast({
                    message: 'this is message',
                    duration: -1,         //如果是-1，不消失
                    position: top,
                    iconClass: "glyphicon glyphicon-heart",     //设置 图标的类
                    className: 'myToast',      //自定义Toast的样式，需要自己提供一个类名
                })
            }
        },
    }
</script>

<style>

</style>
