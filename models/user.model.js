const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "username": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "list": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notebook"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);