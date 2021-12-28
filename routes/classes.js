var express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()

const { getAllActiveClasses, getAllArchivedClasses, createEmptyClass, getAllClassGroups } = require('../controllers/ClassController')

router.get('/active-classes', getAllActiveClasses)
router.post('/active-classes', createEmptyClass)
router.get('/archived-classes', getAllArchivedClasses)

router.get('/class/:classId/groups', getAllClassGroups)





module.exports = router