const express = require('express')
const router = express.Router()

const auth = require('../middlewares/auth_admin_user')

const User = require('../models/user_schema')
const Admin = require('../models/admin_schema')

router.use(auth)

router.get('/', (req, res) => {
    if(req.role === 1){
        try{
            Admin.findOne({'_id': req.id})
            //.populate('activities')
            .then(data => {
                res.status(200).json(data)
            })
        }catch(e){
            res.status(502).json(e)
        }
    } else if (req.role === 2){
        try{
            User.findOne({'_id': req.id})
            //.populate('activities')
            .then(data => {
                res.status(200).json(data)
            })
        }catch(e){
            res.status(502).json(e)
        }
    } else {
        res.status(502).json({"message" : "Role is not defined"})
    }
})

module.exports = router