const Router = require('express')
const controller = require('./authController')
const {check} = require('express-validator')

const router = new Router()

router.post('/registration',[
    check('username','Имя пользователя не может быть пустым').notEmpty(),
    check('password','Пароль не должен быть менее 4 и не более 10 символов').isLength({min:4,max:10})
],controller.registration)
router.post('/login',controller.login)

router.get('/users',controller.getUsers)


module.exports = router