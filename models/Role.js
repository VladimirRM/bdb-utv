// const { Schema,model } = require("mongoose");

// const Role = new Schema({
//    value:  {type:String , unique: true , default: "USER" },
   
// })

// module.exports = model('Role', Role)


// const { Schema, model } = require("mongoose");

// const User = new Schema({
//     username: {type:String , unique: true , require: true},
//     password: {type:String ,  require: true},
//     roles:[{type:String,  ref: "Role"}]
// })

// module.exports = model('User' , User) 

const {Schema,model} = require('mongoose')

const Role = new Schema({
    value :{type:String, unique: true, default: "USER"},
  
})

module.exports = model("Role",Role)