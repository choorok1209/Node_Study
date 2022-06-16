console.log('code1')
setTimeout(() => {
    console.log('setTimeout 0')
}, 0)

console.log('code2')
setImmediate(() => {
    console.log('setImmediate')
})

console.log('code3')
process.nextTick(() => {
    console.log('process.nextTick')
})

// code 3 -> code1 -> code2 순으로 실행