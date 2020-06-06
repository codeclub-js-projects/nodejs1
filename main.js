/* global __dirname, __filename */

// 1 -> Intro:
// -----------
console.log('Hello, Node.js!');
console.log('Привет, мир!');
console.log(`Путь к корневому каталогу: \n${__dirname}`);
console.log(`Путь к файлу сценария: \n${__filename}`);

// 2 -> Modules:
// -------------
const lib = require('./lib.js');
lib.example();
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(`Количество элементов массива: ${lib.counter(arr)}`);
console.log(`Сумма элементов массива: ${lib.sumator(arr)}`);

// 3 -> EventsHandler - template:
// ------------------------------
const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('some_event', (event_message) => {
    console.log(event_message);
});
emitter.emit('some_event', 'Запуск обработчика данного события ...');

// 4 -> Objects and Events:
// ------------------------
class Car {
    constructor(model) {
        this.model = model;
    }
}
const util = require('util');
util.inherits(Car, events.EventEmitter);

lanos = new Car('Lanos');
pego = new Car('Pego');
tesla = new Car('Tesla');

cars = [lanos, pego, tesla];
cars.forEach((car) => {
    car.on('get_speed', (speed_value) => {
        console.log(`Автомобиль ${car.model} - движется со скоростью ${speed_value} км/ч`);
    });
});

lanos.emit('get_speed', '90');
pego.emit('get_speed', '120');
tesla.emit('get_speed', '135');

// 5 -> Files:
// -----------
const fs = require('fs')  // - модуль для работы с файловыми потоками
let message = fs.readFileSync('mess.txt', 'utf8');
console.log(message);
let current_time = (new Date()).toLocaleString();
let answer = `${current_time} -> Получено сообщение :: ${message}`;
fs.writeFileSync('report.txt', answer);
console.log('Отчет сохранен');

// 6 -> Directories:
// -----------------
/*
fs.mkdir('Dir1', () => {    // - callback_function (функция обратного вызова)
    fs.writeFile('Dir1/test1.txt', 'Привет, я сообщение в папке!', () => {
        console.log('Файл успешно создан!');          
    });
});
*/
fs.unlink('Dir1/test1.txt', () => {
    console.log('Файл успешно удален!');
    fs.rmdir('Dir1', () => {
        console.log('Директория успешно удалена!');
    });
});





