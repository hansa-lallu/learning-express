# Tasks

1. create npm project and install Express.js 
- ```npm init```
- ```npm install --save express``` - install as a production dependency
- install nodemon ```npm instal; --save-dev nodemon```
- in package.json file under script add ```"start": "nodemon app.js"```

2. Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and return one response

```
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
```


3. Handle requests to "/" and "/users" such that each request only has one handler/middleware that does something with it (e.g. send dummy response)


```
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
```