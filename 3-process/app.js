const process = require('process')

console.log(process.execPath)
console.log(process.version)
console.log(process.pid)
console.log(process.platform)
console.log(process.env)
console.log(process.uptime())
console.log(process.cpuUsage())

// setTimeout은 등록한 콜백함수를 0 밀리세컨 있다가 
// 즉 현재 코드가 다 수행 되고난 후에, 제일 마지막에 0초 있다가 콜백함수 실행
setTimeout(() => {
    console.log('setTimeout')
}, 0)

// nextTick은 현재 수행되고 있는 코드가 다 완료된 다음에 내가 등록한 콜백함수를 
// task que에 넣어달라고 하고 싶을 때 사용
process.nextTick(() => {
    console.log('nextTick')
})

for(let i = 0; i < 10; i++) {
    console.log('forLoop')
}