const express = require('express')
const app = express()
const port = 3000


let classes = require('./routes/classes')
let groups = require('./routes/groups')


app.use('/', classes)
app.use('/', groups)

app.get('/', (req, res) => {
  res.json({"foo": "bar"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})