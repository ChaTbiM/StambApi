var express = require('express')
var router = express.Router()

const { getAllActiveClasses, getAllArchivedClasses, createEmptyClass, getAllClassGroups, deleteClass, updateClass } = require('../controllers/ClassController')

router.get('/active-classes', getAllActiveClasses)
router.post('/active-classes', createEmptyClass)
router.get('/archived-classes', getAllArchivedClasses)

router.get('/class/:classId/groups', getAllClassGroups)

router.delete('/class/:classId',deleteClass);
router.put('/class/:classId',updateClass);


module.exports = router