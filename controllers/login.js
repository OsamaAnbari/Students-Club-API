const express = require('express')
const router = express.Router()

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../config')
const Admin = require('../models/admin_schema')
const User = require('../models/user_schema')

router.post('/admin', async (req, res) => {
    let password = req.body.password //await bcrypt.hash(req.body.password, 10)
    
    Admin.findOne({'personal_infos.tc' : req.body.tc})
    .then(data => {
        bcrypt.compare(password, data.account.password).then(function (result) {
            if (result) {
                const maxAge = 3 * 60 * 60;
                const token = jwt.sign(
                    { id: data._id, role: data.account.role },
                    jwtSecret,
                    { expiresIn: maxAge }
                )
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000,
                    /*sameSite: 'none',
                    secure: true*/
                })
                res.setHeader('Authorization', `Bearer ${token}`)
                
                res.status(200).json({
                    message: "Login successful",
                    acco : {
                        _id : data._id,
                        name : data.personal_infos.name,
                        surname : data.personal_infos.surname,
                    }
                })
            } else {
                res.status(500).json({ message: "Login not succesful" })
            }
        })
    })
    .catch(err => {res.status(500).json(err)})
})

router.post('/user', async (req, res) => {
    let password = req.body.password //await bcrypt.hash(req.body.password, 10)
    
    User.findOne({'personal_infos.tc' : req.body.tc})
    .then(data => {
        bcrypt.compare(password, data.account.password).then(function (result) {
            if (result) {
                const maxAge = 3 * 60 * 60;
                const token = jwt.sign(
                    { id: data._id, role: data.account.role },
                    jwtSecret,
                    { expiresIn: maxAge }
                )
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000,
                    /*sameSite: 'none',
                    secure: true*/
                })
                
                res.status(200).json({
                    message: "Login successful",
                    acco : {
                        _id : data._id,
                        name : data.personal_infos.name,
                        surname : data.personal_infos.surname,
                    }
                })
            } else {
                res.status(500).json({ message: "Login not succesful" })
            }
        })
    })
    .catch(err => {res.status(500).json(err)})
})

router.post('/logout', async (req, res) => {
    res.clearCookie('jwt')
    res.status(200).json({message : "logged Out"})
})

module.exports = router