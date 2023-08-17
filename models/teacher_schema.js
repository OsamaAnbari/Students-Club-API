const Mongoose = require('mongoose')

const teacher_schema = new Mongoose.Schema({
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
})

const Teacher = Mongoose.model('teachers', teacher_schema, 'teachers')

module.exports = Teacher