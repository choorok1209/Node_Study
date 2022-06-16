const fs = require('fs')

// const readStream = fs.createReadStream('./file.txt', {
//     // highWaterMark: 8,// default = 64 kbytes
//     // encoding: 'utf-8',
// })

// const data = []
// readStream.on('data', chunk => {
//     // console.log(chunk)
//     data.push(chunk)
//     console.log('data')
// })

// readStream.on('end', () => {
//     console.log(data.join(''));
// })

// readStream.on('error', error => {
//     console.log(error);
// })

const data = []
const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8,// default = 64 kbytes
    // encoding: 'utf-8',
}).on('data', chunk => {
    // console.log(chunk)
    data.push(chunk)
    console.log('data')
}).on('end', () => {
    console.log(data.join(''));
}).on('error', error => {
    console.log(error);
})

// on 대신에 once 일 경우엔 처음에 받은 데이터만 출력
