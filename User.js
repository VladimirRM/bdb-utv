const { Schema,model } = require("mongoose");

const user = new Schema({
    username: {type:String , unique: true , require: true},
    parol: {type:String ,  require: true},
    roles:[{type:String,ref:"Role"}]
})

module.exports = model('User' , User)