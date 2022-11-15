const express = require ('express')
const controlller = require('../controllers/auth')
const router = express.Router()

//localhost:5000/api/auth/login
router.post('/login', controlller.login)
//localhost:5000/api/auth/register
router.post('/register', controlller.register)


module.exports = router
