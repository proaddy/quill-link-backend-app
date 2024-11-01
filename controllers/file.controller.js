const File = require('../models/file.model.js');

// get single file
const getFile = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(req.params);
        const file = await File.findById(id);
        res.status(200).json(file);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

// get all files
const getFiles = async (req, res) => {
    try {
        const file = await File.find({});
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// create file
const createFile = async (req, res)=>{
    try {
        const file = await File.create(req.body);
        // console.log(file)
        res.status(201).send({"file": file, message: "File made successfully"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
};

const updateFile = async (req, res) => {
    try {
        const {id} = req.params;
        const file = await File.findByIdAndUpdate(id, req.body);
        // if file is none then give error 404
        if (!file) {
            return res.status(404).json({message: "File does not exist"});
        }
        // if it exist and changes have been made then check for it and return it
        const updatedFile = await File.findById(id);
        res.status(200).json(updatedFile);
    } catch (error) {
        res.status(500).send({message: error.message});
    }  
};

const deleteFile = async (req, res) => {
    try {
        const {id} = req.params;
        const file = await File.findByIdAndDelete(id);
        if (!file) {
            return res.status(404).json({message: "File does not exist"});
        }
        res.status(200).json({message: "File Deleted Successfully"});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

module.exports = {
    getFile,
    getFiles,
    createFile,
    updateFile,
    deleteFile
}