const express = require('express');

const app = express()

// order of below is important if not using next otherwise. Have the more specific middleware first 

app.use('/users', (req, res, next) => {
  console.log('/users middleware')
  res.send('<p>Middleware that handles just /users</p>')
})

app.use('/', (req, res, next) => {
  console.log('/ middleware')
  res.send('<p>Middleware that handles just /</p>')
})

app.listen(3000);