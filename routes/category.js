const express = require ('express')
const controlller = require('../controllers/category')
const router = express.Router()


router.get('/', controlller.getAll)
router.get('/:id', controlller.getById)
router.delete('/:id', controlller.remove)
router.post('/', controlller.create)
router.patch('/:id', controlller.update)


module.exports = router
