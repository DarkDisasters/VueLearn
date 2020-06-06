//需求 要封装一个方法，给一个要读取文件的路径，用这个方法读取文件，并把内容返回

const fs = require('fs')
const path = require('path')

//这是普通读取文件的方法
// fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', (err, dataStr) => {
//     if(err) throw err;
//     console.log(dataStr)
// })

//可以规定： 如果成功后，返回的结果，应该位于callback 参数的第二个位置，此时，第一个位置由于没有出错，放一个null；如果失败了，则第一个位置放Error对象，
//第二个位置放一个 undefined
function getFileByPath(fpath, callback){
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if(err) return callback(error)
        // console.log(dataStr)
        callback(null,dataStr)
    })
}

// var result = getFileByPath(path.join(__dirname, './files/1.txt'))

getFileByPath(path.join(__dirname, './files/1.txt'), (error,dataStr)=>{
    // console.log(dataStr + 'sss')
    if(err) return console.log(err.message)
    console.log(dataStr)
})