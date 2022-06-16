const fs = require('fs')

// 3
// rename(..., callback(error, data))
// 비동기 :: 필요한 인자를 전달해준 다음에 콜백함수를 전달하면 
// 필요한 일들을 다 한 후에 콜백함수 호출

// reameSync(...)
// blocking 따로 콜백함수를 전달하지 않음
// 처리가 끝날때까지 다음으로 넘어가지 않음
// error를 알려주지 않음으로 try, catch문 적용 필요

// Promise.rename().then().catch(0)

// 에러 발생 하는 코드
// fs.renameSync('./file.txt', './file-new.txt')

// 1. renameSync
// try {
//     fs.renameSync('./file1.txt', './file-new.txt')
// } catch(error){
//     console.error(error)
// }
// console.log('hello')

// 2. rename
// fs.rename('./file-new.txt', './text.txt', (error) => {
//     console.log(error)
// })
// console.log('hello')

// 3. Promise
fs.promises.rename('./text.txt', './text-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error)

// fs에서 sync는 지양
// callback 혹은 promise 사용