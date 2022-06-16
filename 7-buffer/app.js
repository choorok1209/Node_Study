// Fixed-size chunk of memory
// array of integers, byte of data

const fs = require('fs')
const buf = Buffer.from('Hi')
console.log(buf)
console.log(buf.length)
// 아래는 아스키코드로 나옴
console.log(buf[0])
console.log(buf[1])

console.log(buf.toString())

// create
const buf2 = Buffer.alloc(2)
const buf3 = Buffer.allocUnsafe(2) // faster
buf2[0] = 72
buf2[1] = 105
console.log(buf2.toString(), buf3.toString())

// concat
const newBuf = Buffer.concat([buf, buf2, buf3])
console.log(newBuf.toString())