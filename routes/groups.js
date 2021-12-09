var express = require('express')
var router = express.Router()
const { getClassTdGroups, getClassTpGroups } = require('../controllers/GroupController')

router.get('/tp-groups/:groupId', getClassTpGroups)
router.get('/td-groups/:groupId', getClassTdGroups)


module.exports = router