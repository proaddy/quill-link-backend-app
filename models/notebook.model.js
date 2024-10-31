const mongoose = require('mongoose');

const notebookSchema = mongoose.Schema({
    "type": {
        type: String,
        default: "notebook"
    },
    "name": {
        type: String,
        default: "New Folder"
    },
    "list": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model("Notebook", notebookSchema);