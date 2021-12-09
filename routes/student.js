var express = require('express')
var router = express.Router()

// define the home page route
router.get('/students', function (req, res) {
    res.send('welcome from students')
})


module.exports = router