// 这是 main.js 是我们项目的JS入口文件

// 1. 导入 Jquery
// 终端 npm i jquery -s
// import *** from *** 是ES6中导入模块的方式
// 由于 ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery')

// 使用 import 语法，导入 CSS样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 注意： 如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略 路径前面的 node_modules 这一层目录，直接写 包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录 ，默认 就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'




// 注意： webpack, 默认只能打包处理 JS 类型的文件，无法处理 其它的非 JS 类型的文件；
// 如果要处理 非JS类型的文件，我们需要手动安装一些 合适 第三方 loader 加载器；
// 1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D
// 2. 打开 webpack.config.js 这个配置文件，在 里面，新增一个 配置节点，叫做 module, 它是一个对象；
// 在 这个 module 对象身上，有个 rules 属性，这个 rules 属性是个 数组；这个数组中，存放了，所有第三方文件的 匹配和 处理规则；

// class 关键字， 是ES6中提供的新语法，是用来实现ES6中面向对象的编程
class Person{
  /*
  使用 static 关键字，可以定义静态属性
  所谓的静态属性，就是 可以直接通过 类名， 直接访问的属性 Person.info
  实例属性： 只能通过类的实例，来访问的属性，叫做实例属性 p1.name
  */
  static info = {name: 'zs', age: 20}
}

var p1 = new Person()
// 访问 Person 类身上的  info 静态属性
console.log(Person.info)
// Java  C#  实现面向对象的方式完全一样了，   class 是从后端语言中借鉴过来的， 来实现面向对象
// var p1 = new Person()

/*旧版本定义新对象
function Animal(name){
  this.name  = name
}
Animal.info = 123

var a1 = new Animal('小花')
*/
// // 这是静态属性：
// // console.log(Animal.info)
// // 这是实例属性：
// console.log(a1.name)

/*
  在 webpack 中，默认只能处理 一部分 ES6 的新语法，一些更高级的ES6语法或者 ES7 语法，webpack 是处理不了的；这时候，
  就需要 借助于第三方的 loader，来帮助webpack 处理这些高级的语法，当第三方loader 把 高级语法转为 低级的语法之后，
  会把结果交给 webpack 去打包到 bundle.js 中通过 Babel ，可以帮我们将 高级的语法转换为 低级的语法
  
  1. 在 webpack 中，可以运行如下两套 命令，安装两套包，去安装 Babel 相关的loader功能：
  1.1 第一套包： cnpm i babel-core babel-loader babel-plugin-transform-runtime -D     这个是转化器
  1.2 第二套包： cnpm i babel-preset-env babel-preset-stage-0 -D      语法的对应关系

  2. 打开 webpack 的配置文件，在 module 节点下的 rules 数组中，添加一个 新的 匹配规则：
  2.1 { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ }
  注意： 在配置 babel 的 loader规则的时候，必须 把 node_modules 目录，通过 exclude 选项排除掉：原因：
  原因 1： 如果 不排除 node_modules， 则Babel 会把 node_modules 中所有的 第三方 JS 文件，都打包编译，这样，会非常消耗CPU，同时，打包速度非常慢；
  原因 2： 哪怕，最终，Babel 把 所有 node_modules 中的JS转换完毕了，但是，项目也无法正常运行！

  3. 在项目的 根目录中，新建一个 叫做 .babelrc  的Babel 配置文件，这个配置文件，
     属于JSON格式，所以，在写 .babelrc 配置的时候，必须符合JSON语法规范： 不能写注释，字符串必须用双引号
  3.1 在 .babelrc 写如下的配置：  大家可以把 preset 翻译成 【语法】 的意思
          {
            "presets": ["env", "stage-0"],    
            "plugins": ["transform-runtime"]
          }
  4. 了解： 目前，我们安装的 babel-preset-env, 是比较新的ES语法， 之前， 我们安装的是 babel-preset-es2015, 
     现在，出了一个更新的 语法插件，叫做 babel-preset-env ，它包含了 所有的 和 es***相关的语法
*/


$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})


// 经过刚才的演示，Webpack 可以做什么事情？？？
// 1. webpack 能够处理 JS 文件的互相依赖关系；
// 2. webpack 能够处理JS的兼容问题，把 高级的、浏览器不是别的语法，转为 低级的，浏览器能正常识别的语法

// 刚才运行的命令格式：    webpack  要打包的文件的路径  打包好的输出文件的路径

/* 
    使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
    1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
    2. 安装完毕后，这个 工具的用法， 和 webpack 命令的用法，完全一样
    3. 由于，我们是在项目中，本地安装的 webpack-dev-server ， 所以，无法把它当作 脚本命令，在powershell 终端中直接运行；（只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行）
    4. 注意： webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
    5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的 bundle.js;
    6. 我们可以认为， webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到了 咱们项目的 根目录中，虽然我们看不到它，但是，可以认为， 和 dist  src   node_modules  平级，有一个看不见的文件，叫做 bundle.js
*/





/*
    1. 使用webpack-dev-server这个工具来实现自动打包编译功能
    2. 安装完毕后，这个工具的用法，和webpack命令的用法完全一样
    3. 由于我们在项目中安装，所以无法把它当作脚本命令在powershell中直接运行
    4. 注意：webpack-dev-server这个工具，如果想要正常运行，要求在本地项目中必须安装webpack
    5. webpack-dev-server 帮我们打包生成的bundle.js文件并没有存放到实际的物理磁盘上，
       而是直接托管到电脑的内存中，所以我们在项目根目录中根本找不到bundle.js；
    6. 我们可以认为，webpack-dev-server把打包好的文件，以一种虚拟的形式，托管到了我们项目的根目录中，
       虽然我们看不到它但是可以认为dist src node_mudules 平级， 有一个看不见的文件叫做bundle.js
*/
 
/*
     注意： webpack 处理第三方文件类型的过程：
    1. 发现这个 要处理的文件不是JS文件，然后就去 配置文件中，查找有没有对应的第三方 loader 规则
    2. 如果能找到对应的规则， 就会调用 对应的 loader 处理 这种文件类型；
    3. 在调用loader 的时候，是从后往前调用的；
    4. 当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行打包合并，最终输出到bundle.js 中去
*/