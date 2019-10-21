const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  var d = new Date();
  var day = d.toISOString().slice(0, 10);
  var time = d.toString().slice(16, 24);

  res.on('finish', () => {
    if (req.originalUrl !== '/favicon.ico') {
      console.log(`${day} ${time} | ${req.method} from ${req.originalUrl}`)
    }
  })

  next()
})


// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})