const express = require ('express')
const controlller = require('../controllers/position')
const router = express.Router()

router.get('/:categoryId', controlller.getByCategoryId)
router.post('/', controlller.create)
router.patch('/:id', controlller.update)
router.delete('/:id', controlller.remove)

module.exports = router
