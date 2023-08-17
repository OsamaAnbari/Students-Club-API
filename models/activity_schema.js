const Mongoose = require('mongoose')
const User = require('./user_schema')

const activity_schema = new Mongoose.Schema({
    name: {
        type: String,
        unique: false,
        require: false,
    },
    teacher: {
        type: Mongoose.Schema.ObjectId,
        unique: false,
        require: false,
    },
    date: {
        type: Date,
        unique: false,
        require: false,
    },
    duration: {
        type: Number,
        unique: false,
        require: false,
    },
    students: [{
        type: Mongoose.Types.ObjectId,
        ref: User,
        unique: false,
        require: false,
    }],
})

const Activity = Mongoose.model('activities', activity_schema, 'activities')

module.exports = Activity