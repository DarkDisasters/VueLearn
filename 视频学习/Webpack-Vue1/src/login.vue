<template>
    <div>
        <h1>这是登录组件，使用 .vue渲染出来的hhhh --- {{msg}}</h1>
    </div>
</template>

<script>
    export default{
        data(){     //注意，data中的组件必须是function
            return {
                msg: '123'
            }
        },
        methods:{
            show(){
                console.log("调用了 login.vue 中的show 方法")
            }
        }
    };
</script>

<style>

</style>
