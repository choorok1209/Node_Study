const EventEmitter = require('events')
const emitter = new EventEmitter()

const callback1 = (args) => {
    console.log('first callback -', args);
}
emitter.on('choorok', callback1)

emitter.on('choorok', (args) => {
    console.log('second callback -', args);
})

emitter.emit('choorok', {message: 1})
emitter.emit('choorok', {message: 2})
emitter.removeListener('choorok', callback1)
emitter.emit('choorok', {message: 3})