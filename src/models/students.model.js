const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});

const Student = model('Student', studentSchema);

module.exports = Student;
