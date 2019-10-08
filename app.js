const express = require('express')
const app = express()
const port = 3000
const { info } = require('./lib/info')

// 列出全部 Todo
app.get('/', (req, res) => {
  info(req.method, req.url)
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  info(req.method, req.url)
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  info(req.method, req.url)
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  info(req.method, req.url)
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  info(req.method, req.url)
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})