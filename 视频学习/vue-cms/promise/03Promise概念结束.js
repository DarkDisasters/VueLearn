// 1. Promise是一个 构造函数，既然是一个构造函数，就可以通过new Promise()得到一个Promise 的实例
// 2. 再Promise上，有两个函数，分别叫做 resolve(成功之后的回调函数), 和reject(失败之后的回调函数)
// 3. 再Promise 构造函数的 Prototype 属性上有一个 .then()方法，也就是说，只要是Promise构造函数创建的实例，都可以访问到 .then（）方法
// 4. Promise 表示一个 异步操作； 每当我们 new 一个 Promise 实例， 这个实例就表示一个具体的异步操作
// 5. 既然Promise 创建的实例是一个异步操作， 那么这个异步操作的结果，只能由两种状态：
//  5.1 状态1：异步执行成功了，需要在内部调用成功的回调函数 resolve 把结果返回给调用者
//  5.2 状态2：异步执行失败了，需要在内部调用成功的回调函数 reject 把结果返回给调用者
//  5.3 由于 Promise 的实例是一个异步操作，所以，内部拿到 操作的结果后，无法使用 return 把操作的结果返回给调用者； 这时候，只能使用回调函数的形式，来吧结果返回给调用者
// 6. 我们可以在 new出来的 Promise 实例上，调用 .then()方法， 预先为这个 Promise 异步操作， 指定 成功(resolve) 和 失败(reject) 回调函数

const fs = require('fs')

//每当new 一个 Promise 实例的时候，就会立即执行这个异步操作中的代码
//也就是说，new的时候，除了能得到一个promise实例之外，还会立即调用我们为Promise构造函数传递的那个function，执行这个function中的异步操作中的代码
// var promise = new Promise(function(){
//     fs.readFile('./files/2.txt', 'utf-8', (err, dataStr) => {
//         if(err) return err
//         console.log(dataStr)
//     })
// })


function getFileByPath(fpath){
    var promise = new Promise(function(resolve, reject){
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            // if(err) return err
            // console.log(dataStr)
            if(err) reject(err)
            resolve(dataStr)
        })
    })

    return promise
}

// getFileByPath('./files/3.txt')
//     .then(function(data){
//         console.log(data + '--------')
//     }, function(err){
//         console.log(err.message)
//     })


//如果前面的promise执行失败，我们不想让后续的promise执行中止，可以为每个promise指定失败的回调
// getFileByPath('./files/11.txt')
//     .then(function(data){
//         console.log(data)

//         //读取文件2
//         return getFileByPath('./files/2.txt')
//     }, function(err){
//         console.log('这是失败的结果' + err.message)
//         //失败也return一个新的promise
//         return getFileByPath('./files/2.txt')
//     })
//     .then(function(data){         //这个.then操作的是读取文件2 return的新的getFilePath
//         console.log(data)

//         return getFileByPath('./files/3.txt')
//     })
//     .then(function(data){
//         console.log(data)
//     })

// 有时候，如果有这样的需求，后续的promise 执行，依赖于前面的promise执行的结果，入股前面的失败了，则后面的就没有继续执行下去的意义了，
//想要实现一旦报错立即终止所有promise的执行
getFileByPath('./files/1.txt')
    .then(function(data){
        console.log(data)

        //读取文件2
        return getFileByPath('./files/22.txt')
    })
    .then(function(data){         //这个.then操作的是读取文件2 return的新的getFilePath
        console.log(data)

        return getFileByPath('./files/3.txt')
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){   //如果前面的 then有任何一个出错了，立即中止所有promise的执行，并马上进入catch去处理promise中抛出的异常
        console.log(err.message)
    })
