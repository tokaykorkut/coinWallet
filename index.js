const express = require ('express')
require('./server/dbconfig/connectdb')
const userRouter = require('./server/routers/userRouter')
const exchangeRouter = require('./server/routers/exchangeRouter')
const path = require('path')

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(exchangeRouter)

if (process.env.NODE_ENV==='production'){

    app.use(express.static(path.join(__dirname,'/client/build')))

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    })
}

app.listen(port, ()=>{console.log('Server is Up!')})