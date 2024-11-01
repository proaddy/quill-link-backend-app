const mongoose = require('mongoose');

const folderSchema = mongoose.Schema({
    "type": {
        type: String,
        default: 'folder'
    },
    "name": {
        type: String,
        required: true,
        default: "New Folder"
    },
    "open": {
        type: Boolean,
        default: false
    },
    "list": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "File"
    }]
},{
    timestamps: true
});

module.exports = mongoose.model("Folder", folderSchema);