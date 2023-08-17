const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const auth_admin = require('../middlewares/auth_admin')

const User = require('../models/user_schema')

//router.use(auth)

router.get('/', auth_admin, (req, res) => {
    try{
        User.find({'account.admin' : req.id})
        //.populate('activities')
        .then(data => {
            res.status(200).json(data)
        })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.get('/:id', auth_admin, (req, res) => {
    try{
        User.findOne({'_id': req.params.id, 'account.admin' : req.id})
        //.populate('activities')
        .then(data => {
            res.status(200).json(data)
        })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.post('/', auth_admin, async (req, res) => {
    try{
        const user = User(req.body)
        user.account.password = await bcrypt.hash(req.body.account.password, 10)
        user.account.role = 'user'
        user.account.admin = req.id
        user.save()

        res.status(200).json({
            message: "Account created successfuly",
            account_infos: user
        })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.delete('/:id', auth_admin, (req, res) => {
    try{
        User.deleteMany({'_id' : req.params.id, 'account.admin' : req.id})
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json(err)
    })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.put('/:id', auth_admin, (req, res) => {
    try{
        User.updateOne({'_id' : req.params.id, 'account.admin' : req.id}, {$set : req.body})
        
        .then(data => {
            res.status(200).json({message : "Data is updated", data})
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

module.exports = router