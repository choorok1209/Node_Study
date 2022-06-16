const { dirname } = require('path')
const path = require('path')

console.log(__dirname)
console.log(__filename)

// windows와 mac에서 모두 알아들을수 있게 경로를 설정해야함


console.log(path.sep)
console.log(path.delimiter)

// basename
console.log(path.basename(__filename))
console.log(path.basename(__filename))

//dirname
console.log(path.dirname(__filename))

//extension
console.log(path.extname(__filename))

//parse
const parsed = path.parse(__filename)
console.log(parsed)
parsed.root
parsed.name

const str = path.format(parsed)
console.log(str)

//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname))
console.log('isAbsolute?', path.isAbsolute('../'))

//normalize
console.log(path.normalize('./foler////////sub'))

// join
// console.log(__dirname + '/' + 'image') :: windows에선 못알아들음

console.log(__dirname + path.sep + 'image')
console.log(path.join(__dirname, 'image'))