var express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()

const { getAllActiveClasses, getAllArchivedClasses, createEmptyClass, getAllClassGroups, deleteClass } = require('../controllers/ClassController')

router.get('/active-classes', getAllActiveClasses)
router.post('/active-classes', createEmptyClass)
router.get('/archived-classes', getAllArchivedClasses)

router.get('/class/:classId/groups', getAllClassGroups)

router.delete('/class/:classId',deleteClass);




module.exports = router