const express = require('express');
const router = express.Router();
const { createFolder, getFolder, getFolders, updateFolder, addIntoList, removeFromList, deleteFolder } = require('../controllers/folder.controller.js');

// create folder
router.post('/', createFolder);

// get single folder
router.get('/:id', getFolder);

// get all folder
router.get('/', getFolders);

// update folder
router.put('/:id', updateFolder);

// add inside folder
router.patch('/:id/add-into-folder', addIntoList);

// remove from folder list
router.patch('/:id/remove-from-folder', removeFromList);

// delete folder
router.delete('/:id', deleteFolder);

module.exports = router;