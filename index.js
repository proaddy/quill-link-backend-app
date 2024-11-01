const express = require('express');
const mongoose = require('mongoose');

// environment variable
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;

// Models
const File = require('./models/file.model');
const Folder = require('./models/folder.model.js');
const Notebook = require('./models/notebook.model.js');
const User = require('./models/user.model.js');

// express instances
const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res)=>{
    console.log(req.body);
    res.send("Hello from node api at /");
});

app.get('/trash', (req, res)=>{
    res.send("Hello from trash page node API");
});

// ++++++++++ File APIs ++++++++++

// create file
app.post('/api/file', async (req, res)=>{
    try {
        const file = await File.create(req.body);
        // console.log(file)
        res.status(201).send({"file": file, message: "File made successfully"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
});

// retrieve all files
app.get('/api/files', async (req, res)=>{
    try {
        const file = await File.find({});
        res.status(201).json(file);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// retrieve single file by it _id
app.get('/api/file/:id', async (req, res) => {
    try {
        const {id} = req.params;
        console.log(req.params);
        const file = await File.findById(id);
        res.status(202).json(file);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

// update single file
app.put('/api/file/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const file = await File.findByIdAndUpdate(id, req.body);
        // if file is none then give error 404
        if (!file) {
            return res.status(404).json({message: "File does not exist"});
        }
        // if it exist and changes have been made then check for it and return it
        const updatedFile = await File.findById(id);
        res.status(201).json(updatedFile);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

// delete single file
app.delete('/api/file/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const file = await File.findByIdAndDelete(id);
        if (!file) {
            return res.status(404).json({message: "File does not exist"});
        }
        res.status(201).json({message: "File Deleted Successfully"});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

// ++++++++++ folder APIs ++++++++++

// ++++++++++ notebook APIs ++++++++++

// ++++++++++ user APIs ++++++++++


mongoose.connect(mongoURI)
  .then(() =>{
    console.log('Connected!');
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000');
    });
  })
  .catch(() => console.log("Connection Error"));