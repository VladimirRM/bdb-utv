const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const app = express()


const start = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://user:user@cluster0.gwazgmm.mongodb.net/?retryWrites=true&w=majority')
     app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start()