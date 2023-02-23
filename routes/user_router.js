const express = require('express');
const {postuser,allusers} = require('../controller/auth')
const router = express.Router()

router.post('/post',postuser)
router.get('/alluser',allusers)

module.exports = router