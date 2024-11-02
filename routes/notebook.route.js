const express = require('express');
const router = express.Router();
const { getNotebook , getNotebooks, createNotebook, updateNotebook, addIntoNotebook, deleteNotebook } = require('../controllers/notebook.controller.js');

// get single notebook
router.get('/:id', getNotebook);

// get all notebooks
router.get('/', getNotebooks);

// create notebook
router.post('/', createNotebook);

// update notebook
router.put('/:id', updateNotebook);

// update the notebook list
router.patch('/:id/add-into-notebook', addIntoNotebook);

// delete the notebook
router.delete('/:id', deleteNotebook);

module.exports = router;