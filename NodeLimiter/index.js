class Queue{
    constructor() {this.q=[]}
    send(item){this.q.push(item)}
    receive(){return this.q.shift()}
    getLength(){return this.q.length}
}

const {Deta} = require('deta');
const deta = Deta('c0v7erzu_UMHnYtbdHmMAz4A1uzdbKhiZ7nvS2Ds5')
const db = deta.Base('cache')

var express = require('express');
var app = express();

app.use(express.json())
app.locals.count = 0
app.locals.limit = 10
app.locals.s_time = new Date().getTime()/1000
app.locals.queue = new Queue()
// NODE VERSION!
app.get('/tokenAlgo', function (req, res) {
    var message = "too many requests received"
    var time_now = new Date().getTime()/1000
    if (time_now - app.locals.s_time >= 60){
        app.locals.s_time = time_now
        app.locals.count = 0
    }
    if (app.locals.count < app.locals.limit){
        app.locals.count ++
        message = "Hello world"
    }
    res.end(message)
})

app.get('/leakyBucket', function (req, res) {
    var message = "too many requests received"
    var time_now = new Date().getTime()/1000
    if (app.locals.queue.getLength() < app.locals.limit){
        app.locals.queue.send("Hello world")
    }
    if (time_now - app.locals.s_time >= 6){
        app.locals.s_time = time_now
        message = app.locals.queue.receive()
    }
    res.end(message)
})

app.get('/detaBase',function(req,res){
    var message = 'too many requests received'
    var time_now = new Date().getTime()/1000
    if (parseInt(db.get('${app.locals.count}')) < app.locals.limit){
        app.locals.count ++
        db.put({message:'Hello world',key:''+app.locals.count},)
    }
    if (time_now - app.locals.s_time >= 6){
        app.locals.s_time = time_now
        message = db.get('${}')
    }
    res.end(message)
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
