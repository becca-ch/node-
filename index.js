const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 引入数据库
const db = require('./db');
// 引入路由挂载
app.use('/user',require('./router/routeDemo')) // 也可不加 /user 接口前缀

// app.get('/first',(req, res) => {
//   res.send('123')
// })

app.listen(8000, function(){
  console.log('服务器启动成功')
})
