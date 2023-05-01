
 const User = require('./models/User')
 const Role = require('./models/Role')
 const dcrypt = require('dcryptjs');
 const {validationResult} = require('express-validator')

class authController {
    async registration(req,res){
      try{
       const {username, password} = req.body
       const candidate =  await User.findOne({username})
       if( candidate){
        return res.status(400).json({massage: 'Пользователь с таким именем уже существует'})
       }
       const hashPassword = dcrypt.hash("password",7);
       const userRole = await Role.findOne({value: 'USER'})
       const user = new User({username,password: hashPassword,roles:[userRole.value ]})
       await user.save()
       return res.json({ message:'Пользователь успешно зарегестрирован'})
      } catch(e){
        console.log(e)
        res.status(400).json({massage: 'Registration error'}) 
      } 
    }
    async login(req,res){
   try{

      } catch(e){
       console.log(e)
       res.status(400).json({massage: 'Login error'}) 
      } 
    }
    async getUsers(req,res){
        try{
          
         res.json('server work')
        } catch(e){
          
        } 
    }
}

module.exports =  new authController()