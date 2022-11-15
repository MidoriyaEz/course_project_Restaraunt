const express = require ('express')
const controlller = require('../controllers/analytics')
const router = express.Router()

router.get('/overview', controlller.overview)
router.get('/analytics', controlller.analytics)


module.exports = router
