//需求 要封装一个方法，给一个要读取文件的路径，用这个方法读取文件，并把内容返回

const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, succCb, errCb){
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if(err) return errCb(err)
        // console.log(dataStr)
        succCb(dataStr)
    })
}


// getFileByPath(path.join(__dirname, './files/1.txt'), function(data){
//     console.log(data + "success hhh")
// },function(err){
//     console.log('失败的结果:', + err.message)
// })

//先读取文件1，再读取2，最后读3
//使用ES6 中的promise来解决 回调地狱问题，不过不能减少代码量
getFileByPath(path.join(__dirname, ''))