<template>
    
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2012-11-12 12：10：07</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/menu2.png">
                    <div class="mui-media-body">
                        <h1>木屋</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2012-11-12 12：10：07</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/menu3.png">
                    <div class="mui-media-body">
                        <h1>CBD</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2012-11-12 12：10：07</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data: function(){
        return {
            newsList: []
        }
    },
    created(){
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            this.$http.get("api/getnewslist").then(result => {
                if(result.body.status === 0){
                    //没有失败，应该把数据保存在data上
                    this.newsList = result.body.message
                }
                else{
                    Toast('获取新闻列表失败！')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content:space-between;
        }
    }

}
</style>
