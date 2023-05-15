// 引用epress和express路由器
const express = require('express')
const router = express.Router()
// 引用db
const db = require('../../models')
const Todo = db.Todo

// 定義首頁路由
router.get('/', (req, res) => {
  const UserId = req.user.id
  return Todo.findAll({
    raw: true,
    nest: true,
    where: { UserId },
    order: [
      ['id', 'ASC']
    ]
  })
  .then((todos) => { return res.render('index', { todos }) })
  .catch(error => console.log(error))
})
// 匯出路由模組
module.exports = router