const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://tokay:Supradyn1-@cluster0-s1arx.mongodb.net/kolayikDB?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true   
}).then(()=>{
    console.log('DB connection successful!')})
.catch((err)=>{
    console.log(err)
    console.log('DB connection failed!')})
        
   
