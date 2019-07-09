//导入 http 内置模块
const http = require('http')
// 这个核心模块， 能帮我们解析 URL地址，从而拿到 pathname query
const urlModel = require('url')

// 创建一个 http 服务器
const server = http.createServer()

server.on('request', function(req, res)){
    // const url = req.url

    const { pathname: url, query } = urlModel.parse(req.url, true)

    if (url === '/getscript'){
        // 拼接一个合法的Js脚本，这里拼接的是一个方法的调用
        // var scriptStr = 'show()'
        var scriptStr = `${query.callback}()`
        //res.end 发送给 客户端， 客户端去吧 这个 字符串当作Js代码去解析
        res.end(scriptStr)
    }else{
        res.end('404')
    }
}