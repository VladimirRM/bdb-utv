const express = require('express')
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

const start = async ()=> {
    try{
        await mongoose.connect('mongodb+srv://user:user@cluster0.k5omo2x.mongodb.net/uldb?retryWrites=true&w=majority')
      app.listen(PORT, ()=>{
        console.log(`server started on port ${PORT}`)
      })
    }catch (e){
    console.log(e)
    }
}
start()