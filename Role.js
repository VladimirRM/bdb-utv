const { Schema,model } = require("mongoose");

const user = new Schema({
   value:  {type:String , unique: true , require: true},
   
})

module.exports = model('User' , User)