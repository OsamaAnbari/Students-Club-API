const Mongoose = require('mongoose')

const message_schema = new Mongoose.Schema({
    header: {
        sender_id: {
            type: Mongoose.Schema.ObjectId,
            unique: false,
            require: false,
        },
        receiver_id: [{
            type: Mongoose.Schema.ObjectId,
            unique: false,
            require: false,
        }],
    },
    body: {
        date: {
            type: Date,
            unique: false,
            require: false,
        },
        subject: {
            type: String,
            unique: false,
            require: false,
        },
        content: {
            type: String,
            unique: false,
            require: false,
        },
    }
})

const Message = Mongoose.model('messages', message_schema, 'messages')

module.exports = Message