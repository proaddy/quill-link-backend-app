const express = require('express');
const router = express.Router();
const { createFolder, getFolder, getFolders, updateFolder, addIntoList, deleteFolder } = require('../controllers/folder.controller.js');

// create folder
router.post('/', createFolder);

// get single folder
router.get('/:id', getFolder);

// get all folder
router.get('/', getFolders);

// update folder
router.put('/:id', updateFolder);

// add inside folder
router.patch('/:id/add-into-list', addIntoList);

// delete folder
router.delete('/:id', deleteFolder);

module.exports = router;