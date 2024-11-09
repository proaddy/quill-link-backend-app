const { default: mongoose } = require('mongoose');
const Notebook = require('../models/notebook.model.js');

const getNotebook = async (req, res) => {
    try {
        const {id} = req.params;
        const notebook = await Notebook.findById(id);
        res.status(200).json(notebook);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getNotebooks = async (req, res) => {
    try {
        const notebook = await Notebook.find({});
        res.status(200).json(notebook);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createNotebook = async (req, res) => {
    try {
        const notebook = await Notebook.create(req.body);
        res.status(201).json({notebook});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateNotebook = async (req, res) => {
    try {
        const {id} = req.params;
        const notebook = await Notebook.findByIdAndUpdate(id, req.body);
        if (!notebook) {
            return res.status(404).json({message: "No such notebook exist"});
        }
        res.status(200).json({message: "Notebook Updated Successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addIntoNotebook = async (req, res) => {
    try {
        const {id} = req.params;
        const {folderId} = req.body;
        const notebook = await Notebook.findByIdAndUpdate(id, 
            {$push : { list: mongoose.Types.ObjectId.createFromHexString(folderId)}},
            {new: true}
        );
        if (!notebook) {
            return res.status(404).json({message: "No such notebook exist"});
        }
        res.status(200).json({message: "Folder added to the list"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const removeFromNotebook = async (req, res) => {
    try {
        const {id} = req.params;
        const {folderId} = req.body;
        const notebook = await Notebook.findByIdAndUpdate(id, 
            {$pull : { list: mongoose.Types.ObjectId.createFromHexString(folderId)}},
            {new: true}
        );
        if (!notebook) {
            return res.status(404).json({message: "No such notebook exist"});
        }
        res.status(200).json({message: "Folder removed from the list"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteNotebook = async (req, res) => {
    try {
        const {id} = req.params;
        const notebook = await Notebook.findByIdAndDelete(id);
        if (!notebook) {
            return res.status(404).json({message: "No such notebook exist"})
        }
        res.status(200).json({message: "Notebook Deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


module.exports = {
    getNotebook,
    getNotebooks,
    createNotebook,
    updateNotebook,
    addIntoNotebook,
    removeFromNotebook,
    deleteNotebook
}