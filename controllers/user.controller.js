const { default: mongoose } = require('mongoose');
const User = require('../models/user.model.js');

const getUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({message: "User Created successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(404).json({message: "No such user found"})
        }
        res.status(200).json({message: "User data updated"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addIntoUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {notebookId} = req.body;
        const user = await User.findByIdAndUpdate(id,
            {$push: {list: mongoose.Types.ObjectId.createFromHexString(notebookId)}},
            {new: true}
        );
        if (!user) {
            return res.status(404).json({message: "No such user found"})
        }
        res.status(200).json({message: "Notebook added into user"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({message: "No such user found"})
        }
        res.status(200).json({message: "User Deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    addIntoUser,
    deleteUser
}