const { default: mongoose } = require('mongoose');
const Folder = require('../models/folder.model');

const createFolder = async (req, res) => {
    try {
        const folder = await Folder.create(req.body);
        res.status(201).json({folder: folder, message: "Folder Created"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getFolder = async (req, res) => {
    try {
        const folder = await Folder.findById(id);
        res.status(200).json(folder);
    } catch (error) {
        res.status(500).josn({message: error.message});
    }
};

const getFolders = async (req, res) => {
    try {
        const {id} = req.params;
        const folder = await Folder.find({});
        res.status(200).json(folder);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateFolder = async (req, res) => {
    try {
        const {id} = req.params;
        const folder = await Folder.findByIdAndUpdate(id, req.body);
        if (!folder) {
            return res.status(404).json({message: "No folder found"});
        }
        console.log(folder);
        res.status(200).json({message: 'Folder Updated Successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addIntoList = async (req, res) => {
    try {
        const {fileId, fileType} = req.body;
        const {id} = req.params;
        const folder = await Folder.findByIdAndUpdate(id,
            { $push: {list: {
                _id: mongoose.Types.ObjectId.createFromHexString(fileId), 
                type: fileType
            }}},
            { new: true}
        );
        if (!folder) {
            return res.status(404).json({message: "No such folder found"});
        }
        console.log(folder);
        res.status(200).json({message: "File/Folder added to folder"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteFolder = async (req, res) => {
    try {
        const {id} = req.params;
        const folder = await Folder.findByIdAndDelete(id);
        if (!folder) {
            return res.status(404).json({message: "No folder found"});
        }
        res.status(200).json({message: "Folder Deleted Successfully"});
    } catch (error) {
        
    }
}

module.exports = {
    createFolder,
    getFolder,
    getFolders,
    updateFolder,
    addIntoList,
    deleteFolder
}