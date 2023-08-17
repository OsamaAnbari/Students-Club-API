const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth_admin_user')
const auth_admin = require('../middlewares/auth_admin')
const auth_user = require('../middlewares/auth_user')

const Activity = require('../models/activity_schema')
const User = require('../models/user_schema')
const Teacher = require('../models/teacher_schema')

//router.use(auth)

router.get('/', auth_admin, async (req, res) => {
    try{
        const activities = await Activity.find({})
        res.status(200).json(activities)
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.get('/my', auth_user, async (req, res) => {
    try{
        const activities = await User.findOne({_id : req.id}, {activiities : 1, _id : 0}).populate('activiities')
        res.status(200).json(activities.activiities)
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.post('/', auth_admin, async (req, res) => {
    try{
        const activity = Activity(req.body)
        activity.save()

        await User.updateMany({ '_id': req.body.students }, { $push: { activiities: activity._id } })
        await Teacher.updateMany({ '_id': req.body.teacher }, { $push: { activiities: activity._id } })

        res.status(200).json({
            message: "Activity created successfuly",
            account_infos: activity
        })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.delete('/:id', auth_admin, async (req, res) => {
    try{
        const activity = await Activity.findOne({'_id' : req.params.id})
        await Activity.deleteOne({'_id' : req.params.id})

        await User.updateMany({ '_id': activity.students }, { $pull: { activiities: req.params.id } })
        await Teacher.updateMany({ '_id': activity.teacher }, { $pull: { activiities: req.params.id } })

        res.status(200).json({
            message: "Activity is deleted successfuly",
            account_infos: activity
        })
    }catch(e){
        res.status(502).json({error : e.message})
    }
})

router.put('/:id', auth_admin, async (req, res) => {
    try{
        Activity.updateOne({'_id' : req.params.id}, {$set : req.body})
        
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