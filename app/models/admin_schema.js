const Mongoose = require('mongoose')
//const Message = require('./message_schema')

const admin_schema = new Mongoose.Schema({
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
    },
    logs: {
        type: Array
    },
    received_messages: [{
        type: Mongoose.Schema.ObjectId,
        ref: 'messages',
        unique: false,
        require: false,
    }],
    sent_messages: [{
        type: Mongoose.Schema.ObjectId,
        ref: 'messages',
        unique: false,
        require: false,
    }]
})

const Admin = Mongoose.model('admins', admin_schema, 'admins')

module.exports = Admin