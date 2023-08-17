const Mongoose = require('mongoose')
const Activity = require('./activity_schema')
const Message = require('./message_schema')

const user_schema = new Mongoose.Schema({
    personal_infos: {
        name: {
            type: String,
            unique: false,
            require: false,
        },
        surname: {
            type: String,
            unique: false,
            require: false,
        },
        birth_date: {
            type: Date,
            unique: false,
            require: false,
        },
        tc: {
            type: String,
            unique: false,
            require: false,
        },
    },
    contact: {
        mobile: {
            type: String,
            unique: false,
            require: false,
        },
        email: {
            type: String,
            unique: false,
            require: false,
        },
    },
    education: {
        university: {
            type: String,
            unique: false,
            require: false,
        },
        faculty: {
            type: String,
            unique: false,
            require: false,
        },
        department: {
            type: String,
            unique: false,
            require: false,
        },
        grade: {
            type: String,
            unique: false,
            require: false,
        },
    },
    account: {
        role: {
            type: String,
            unique: false,
            require: false,
        },
        password: {
            type: String,
            unique: false,
            require: false,
        },
        admin: {
            type: Mongoose.Schema.ObjectId,
            unique: false,
            require: false,
        },
    },
    logs: {
        type: Array
    },
    activiities: [{
        type: Mongoose.Schema.ObjectId,
        ref: Activity,
        unique: false,
        require: false,
    }],
    received_messages: [{
        type: Mongoose.Schema.ObjectId,
        ref: Message,
        unique: false,
        require: false,
    }],
    sent_messages: [{
        type: Mongoose.Schema.ObjectId,
        ref: Message,
        unique: false,
        require: false,
    }]
})

const User = Mongoose.model('students', user_schema, 'students')

module.exports = User