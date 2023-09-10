const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth_admin_user')

router.use(auth)

router.post('/', async (req, res) => {

})

module.exports = router