const express = require('express');
const router = express.Router();

// 如果想对数据库进行操作需要引入模块 model
const UserModel = require('../models/SchemaDemo');


// 创建
router.post('/add', async (req, res) => {
  const data = await UserModel.create(req.body);
  // const res = await UserModel.find();
  res.send({
    code: '000',
    success: "ok",
    msg: "创建成功"
  })
})

// 查询
router.get('/getList', async (req, res) => {
  const data = await UserModel.findOne();
  res.send({
    code: '000',
    success: "ok",
    msg: "成功",
    data: data
  });
})

//删除
router.post('/del', async(req, res) => {
  const data = await UserModel.findByIdAndDelete(req.body.id);
  res.send({
    code: '000',
    success: "ok",
    msg: "成功",
  })
})

//更新
router.post('/update', async(req, res) => {
  // console.log(req.body.id)
  const data = await UserModel.findByIdAndUpdate(req.body.id, req.body);
  res.send({
    code: '000',
    success: "ok",
    msg: "成功",
  })
})


module.exports = router;