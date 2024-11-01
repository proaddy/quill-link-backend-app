const express = require('express');
const router = express.Router();
const { getFile, getFiles, createFile, updateFile, deleteFile } = require('../controllers/file.controller.js');

// get all files
router.get('/:id', getFile);

// get single file
router.get('/', getFiles);

// add file
router.post('/', createFile);

// update file data
router.put('/:id', updateFile)

// delete file
router.delete('/:id', deleteFile);

module.exports = router;