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
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        type: { type: String, enum: ['file', 'folder'], required: true }
    }]
},{
    timestamps: true
});

module.exports = mongoose.model("Folder", folderSchema);