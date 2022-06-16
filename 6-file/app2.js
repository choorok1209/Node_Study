const fs = require('fs').promises

// reading a file

fs.readFile('./text.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(console.error)

// Encoding : 
// Flag : 

// writing a file
// // fs.appendFile()
// fs.writeFile('./file.txt', 'Hey! Hello, Koreans!')
//     .catch(console.error)

// fs.copyFile('./file.txt', './file2.txt')
//     .catch(console.error)

// 위의 상황에선 비동기적이어서 내용이 없음

// 순차적으로 하고 싶다면 아래와 같이
fs.appendFile('./file.txt', 'Ya!, Koreans')
    .then(() => {
        fs.copyFile('./file.txt', './file2.txt')
            .catch(console.error)
    })
    .catch(console.error)


// folder
fs.mkdir('sub-folder')
    .catch(console.error)

fs.readdir('./')
    .then(console.log)
    .catch(console.error)