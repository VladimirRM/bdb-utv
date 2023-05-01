// const Router = require('express')
// const router = new Router()
// const controller = require('./authController')

// router.post('/registration',controller.registration)
// router.post('/login',controller.login)
// router.get('/users', controller.getUsers)

// module.exports = router 

const Router = require('express')

const router = new Router()

router.post('/registration')
router.post('/login')
router.get('/users')

module.exports  = router