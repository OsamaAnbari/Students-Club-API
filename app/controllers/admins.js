const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const Admin = require('../models/admin_schema')

router.post('/', async (req, res) => {
    try{
        if(req.body.verify === '123'){
            const admin = Admin(req.body)
            admin.account.password = await bcrypt.hash(req.body.account.password, 10)
            admin.account.role = 'admin'
            await admin.save()

            res.status(200).json({
                message: "Account created successfuly",
                account_infos: admin
            })
        }else{
            res.status(400).json({message : "verify is not successful"})
        }
    }catch(e){
        res.status(500).json({message: e})
    }
})

module.exports = router