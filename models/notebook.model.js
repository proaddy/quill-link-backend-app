const mongoose = require('mongoose');

const notebookSchema = mongoose.Schema({
    "name": {
        type: String,
        default: "New Notebook"
    },
    "list": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model("Notebook", notebookSchema);