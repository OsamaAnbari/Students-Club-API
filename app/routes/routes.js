const express = require('express')
const router = express.Router()

router.use('/login', require('../controllers/login'))

router.use('/personal', require('../controllers/personal_infos'))
router.use('/admins', require('../controllers/admins'))
router.use('/users', require('../controllers/users'))
router.use('/activities', require('../controllers/activities'))
router.use('/messages', require('../controllers/messages'))
router.use('/teachers', require('../controllers/teachers'))

router.use('*', (req, res) => {
    res.status(404).send(`
    <h1>Page not found</h1>
    `)
})

module.exports = router