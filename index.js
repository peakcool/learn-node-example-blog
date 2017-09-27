var express = require('express')
var app = express()
var path = require('path')

var indexRouter = require('./routes/index.js')
var usersRouter = require('./routes/users.js')

app.set('views', path.join(__dirname, 'views')) //设置存放模版文件的目录
app.set('view engine', 'ejs') //设置模版引擎为ejs

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(3000)