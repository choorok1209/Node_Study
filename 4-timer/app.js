let num = 1

const interval = setInterval(() => {
    console.log(num++)
}, 1000) // 1000 밀리세컨 = 1초

setTimeout(() => {
    console.log('Timeout!')
    clearInterval(interval)
}, 6000) 