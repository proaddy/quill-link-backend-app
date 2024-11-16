const express = require('express');
const mongoose = require('mongoose');

// environment variable
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 4000;
const hostname = process.env.HOSTNAME;

// express instances
const app = express();

// middleware
app.use(express.json());
const cors = require('cors');

const corsOptions = {
  origin: 'https://quill-link-project.netlify.app/login', // Replace with your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
};

app.use(cors(corsOptions));

// routes
const fileRoutes = require('./routes/file.route.js');
app.use("/api/files", fileRoutes); 

const folderRoutes = require('./routes/folder.route.js');
app.use('/api/folders', folderRoutes);

const notebookRoutes = require('./routes/notebook.route.js');
app.use('/api/notebooks', notebookRoutes);

const userRoutes = require('./routes/user.route.js');
app.use('/api/users', userRoutes);


app.get('/', (req, res)=>{
    console.log(req.body);
    res.send("Hello from node api at /");
});

app.get('/trash', (req, res)=>{
    res.send("Hello from trash page node API");
});

// connection to mongoose database
mongoose.connect(mongoURI)
  .then(() =>{
    console.log('Connected!');
    app.listen(port, hostname, ()=>{
        console.log(`Server is running on ${hostname} ${port}`);
    });
  })
  .catch(() => console.log("Connection Error"));