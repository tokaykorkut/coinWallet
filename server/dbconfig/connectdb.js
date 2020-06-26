const mongoose = require('mongoose')

mongoose.connect("",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true   
}).then(()=>{
    console.log('DB connection successful!')})
.catch((err)=>{
    console.log(err)
    console.log('DB connection failed!')})
        
   
