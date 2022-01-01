var express = require('express')
var router = express.Router()
const {deleteGroup } = require('../controllers/GroupController')


router.delete("/groups/:groupId",deleteGroup);


module.exports = router