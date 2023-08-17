const express = require('express')
const router = express.Router()
const auth_admin_user = require('../middlewares/auth_admin_user')

const Message = require('../models/message_schema')
const User = require('../models/user_schema')
const Admin = require('../models/admin_schema')

//router.use(auth)

router.get('/getsent', auth_admin_user, async (req, res) => {
    try {
        const messages = await Message.find({"header.sender_id" : req.id})
        res.status(200).json(messages)
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.get('/getreceived', auth_admin_user, async (req, res) => {
    try {
        const messages = await Message.find({"header.receiver_id" : req.id})
        res.status(200).json(messages)
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.get('/:id', auth_admin_user, async (req, res) => {
    try {
        const message = await Message.findOne(
            {
                $or : [{"header.sender_id" : req.id}, {"header.receiver_id" : req.id}],
                _id : req.params.id
            }
            )
        res.status(200).json(message)
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.post('/', auth_admin_user, async (req, res) => {
    try{
        const message = Message(req.body)
        message.header.sender_id = req.id
        message.save()

        if (req.role === 1){
            await User.updateMany({ '_id': req.body.header.receiver_id }, { $push: { received_messages: message._id } })
            await Admin.updateMany({ '_id': req.id }, { $push: { sent_messages: message._id } })
        }

        if (req.role === 2){
            await Admin.updateMany({ '_id': req.header.receiver_id }, { $push: { received_messages: message._id } })
            await User.updateMany({ '_id': req.id }, { $push: { sent_messages: message._id } })
        }

        res.status(200).json({
            message: "Message is sent successfuly",
            account_infos: message
        })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.delete('/:id', auth_admin_user, async (req, res) => {
    try{
        const message = await Message.findOne({'_id' : req.params.id})
        await Message.deleteOne({'_id' : req.params.id})

        if (req.role === 1){
            await User.updateMany({ '_id': message.header.receiver_id }, { $pull: { received_messages: message._id } })
            await Admin.updateMany({ '_id': req.id }, { $pull: { sent_messages: message._id } })
        }

        if (req.role === 2){
            await Admin.updateMany({ '_id': message.header.receiver_id }, { $pull: { received_messages: message._id } })
            await User.updateMany({ '_id': req.id }, { $pull: { sent_messages: message._id } })
        }
        
        res.status(200).json({
            message: "Message is deleted successfuly"
        })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

module.exports = router