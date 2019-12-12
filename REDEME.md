### node.js 架子，拿到直接写接口

1. 创建数据
create(req.body)
2. 删除数据
findByIdDelete(req.body.id)
3. 更新数据
findByIdUpdate(req.body.id, req.body)
4. 查询数据
findOne()