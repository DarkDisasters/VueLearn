const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins:[                   //配置插件的节点
        new webpack.HotModuleReplacementPlugin(),        //new一个人更新的模块对象， 这是启用热更新的第三步
        new htmlWebpackPlugin({                          //创建一个在 内存中 生成html 页面的插件
           template: path.join(__dirname, './src/index.html'),  //指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面 
           filename: 'index.html'     ////指定生成页面的名称
        })
    ],
    module:{
        rules:[
            {test:/\.css$/, use: ['style-loader', 'css-loader']},
            {test:/\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test:/\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7630&name=[hash:8]-[name].[ept]'},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},     // 处理字体文件的loader
            {test: /\.js$/, use: 'babel-loader', exclude: /node_module/}  //配置Babel 来转换高级语法
        ]
    },
    resolve: {
        alias: {    //这是设置vue呗导入时候的包的路径
            // 'vue$': "vue/dist/vue.js"
        }
    }
}

