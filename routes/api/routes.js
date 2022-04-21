const { Router: Routes } = require('express')
const router = new Routes()

const authMiddleware = require('../../middlewares/auth-middleware')

const userController = require('../../controllers/user.controller')
const authController = require('../../controllers/auth.controller')
const productController = require('../../controllers/product.controller')

router.get('/users', authMiddleware, userController.getUsers)

router.post('/registration', userController.createUser)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/activate/:link', authController.activate)
router.get('/refresh', authController.refresh)

router.get('/products', productController.getProduct)

module.exports = router