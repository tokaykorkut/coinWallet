const express = require ('express')
require('./server/dbconfig/connectdb')
const userRouter = require('./server/routers/userRouter')
const exchangeRouter = require('./server/routers/exchangeRouter')

const port = process.env.PORT || 3001

const app = express()

//body-parser part
app.use(express.json())

// routers connection part
//app.use(userRouter)
//app.use(exchangeRouter)

app.listen(port, ()=>{console.log('Project is up!')})