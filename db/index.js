const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/local', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})

const db = mongoose.connection; // 数据库连接对象
// 监听数据库
db.on('err', console.error.bind())
db.once('open', function(){
  // 执行运行当前文件,数据库连接成功则执行当前状态
  console.log('数据库 成功')
})