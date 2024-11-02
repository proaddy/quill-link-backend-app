const express = require('express');
const mongoose = require('mongoose');

// environment variable
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;

// Models
const User = require('./models/user.model.js');

// express instances
const app = express();

// middleware
app.use(express.json());

// routes
const fileRoutes = require('./routes/file.route.js');
app.use("/api/files", fileRoutes); 

const folderRoutes = require('./routes/folder.route.js');
app.use('/api/folders', folderRoutes);

const notebookRoutes = require('./routes/notebook.route.js');
app.use('/api/notebooks', notebookRoutes);


app.get('/', (req, res)=>{
    console.log(req.body);
    res.send("Hello from node api at /");
});

app.get('/trash', (req, res)=>{
    res.send("Hello from trash page node API");
});


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