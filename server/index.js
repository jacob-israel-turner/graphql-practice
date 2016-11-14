const express = require('express')
const app = express()

const port = 9001

app.get('/q', function (req, res) {
  res.send('Hello World')
})
 
app.listen(9001)
