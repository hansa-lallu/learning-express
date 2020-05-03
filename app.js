const express = require('express');

const app = express()

app.use((req, res, next) => {
  console.log('first middleware')
  next();
})

app.use((req, res, next) => {
  console.log('second middleware')
  res.send('<p>Task almost completed</p>')
})

app.listen(3000);