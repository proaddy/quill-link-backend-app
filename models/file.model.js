const mongoose = require('mongoose');

// id, type, name, description, favourite, archive, trash, user_list

const fileSchema = mongoose.Schema({
    "type": {
        type: String,
        default: 'file'
    },
    "name": {
        type: String,
        default: 'New File'
    },
    "desc": {
        type: String,
        default: ''
    },
    "favourite" : {
        type: Boolean,
        default: false
    },
    "archive" : {
        type: Boolean,
        default: false
    },
    "trash" : {
        type: Boolean,
        default: false
    },
    "userID" : {
        type: String,
    },
    "users_list":[{ 
        type: Number,
        default:''
    }]
},{
    timestamps: true
}

);

module.exports = mongoose.model('File', fileSchema);