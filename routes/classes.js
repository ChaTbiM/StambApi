var express = require('express')
var router = express.Router()

const { getAllActiveClasses, getAllArchivedClasses, getAllClassGroups } = require('../controllers/ClassController')

router.get('/active-classes', getAllActiveClasses)
router.get('/archived-classes', getAllArchivedClasses)

router.get('/class/:classId/groups', getAllClassGroups)




module.exports = router