const path = require('path')
//启动热更新的第二步， webpack4以后的不用这步
const webpack = require('webpack')

//导入在内存中生成html页面的插件
//只要是插件一定要放在 plugins 节点上去
/*下面这个插件的作用
    1. 自动在内存中根据指定页面生成一个内存的页面
    2. 自动把打包好的bundle.js 追加到页面中去
*/
const htmlWebpackPlugin = require('html-webpack-plugin')




//这个配置文件其实就是一个js文件,通过node的一个模块操作,向外暴露一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),  //入口,表示要使用webpack打包那个文件
    output:{
        //输出文件的相关配置
        path: path.join(__dirname, './dist'), 
        filename: 'bundle.js' 
    },
    devServer:{
        //配置dev-server命令参数的第二种形式，相对来说这种方式麻烦一些
        // --open --port 3000 --contentBase src --hot
        open: true,             //自动打开浏览器
        port: 3000,             //设置启动时候的运行端口
        contentBase: 'src',     //指定托管的根目录
        hot: true               //启动热更新
    },
    plugins:[                   //配置插件的节点
        new webpack.HotModuleReplacementPlugin(),        //new一个人更新的模块对象， 这是启用热更新的第三步
        new htmlWebpackPlugin({                          //创建一个在 内存中 生成html 页面的插件
           template: path.join(__dirname, './src/index.html'),  //指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面 
           filename: 'index.html'     ////指定生成页面的名称
        })
    ],
    module:{                    ////这个节点用于配置所有第三方模块加载器
        rules: [                //所有第三方匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},    //以.css结尾的文件，$代表以这个结尾，\.的\是为了转义的作用, /配置.css文件的第三方loader规则
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']}
        ]
    } 
}