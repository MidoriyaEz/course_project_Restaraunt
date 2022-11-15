const express = require ('express')
const controlller = require('../controllers/order')
const router = express.Router()

router.post('/', controlller.create)
router.get('/', controlller.getAll)


module.exports = router
