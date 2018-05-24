var events = require('events');
var eventsEmmiter = new events.EventEmitter();

var connectHandler = function connercted() {
    console.log("connectd");
    eventsEmmiter.emit('data_received');
}

eventsEmmiter.on('connection',connectHandler);
eventsEmmiter.on('data_received',function () {
    console.log("数据接收成功！")
});

eventsEmmiter.emit('connection');
console.log("程序执行完毕！");