const path = require('path')

//这个配置文件其实就是一个js文件,通过node的一个模块操作,向外暴露一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),  //入口,表示要使用webpack打包那个文件
    output:{
        //输出文件的相关配置
        path: path.join(__dirname, './dist'), 
        filename: 'bundle.js' 
    },
    // externals:{
    //     "jquery" : "jQuery"
    // }
}