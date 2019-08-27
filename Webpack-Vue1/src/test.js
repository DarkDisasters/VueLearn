// 这是 Node 中向外暴露成员的形式：
// module.exports = {}

// 在 ES6中，也通过 规范的形式，规定了 ES6 中如何 导入 和 导出 模块
//  ES6中导入模块，使用   import 模块名称 from '模块标识符'    import '表示路径'

// 在 ES6 中，使用 export default 和 export 向外暴露成员：

var info = {
    name: 'zs',
    age: 20
}

export default info


// 注意： export default 向外暴露的成员，可以使用任意的变量来接收
// 注意： 在一个模块中，export default 只允许向外暴露1次
// 注意： 在一个模块中，可以同时使用 export default 和 export 向外暴露成员

export var title = '小星星'



// 在Node中 使用 var 名称 = require('模块标识符')
// module.exports 和 exports 来暴露成员