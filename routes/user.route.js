const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, addIntoUser, deleteUser } = require('../controllers/user.controller.js');

// get all users
router.get('/', getUsers);

// get single user
router.get('/:id', getUser);

// create user
router.post('/', createUser);

// update user info
router.put('/:id', updateUser);

// add notebook in user
router.patch('/:id/add-into-user', addIntoUser);

// delete user
router.delete('/:id', deleteUser);

module.exports = router;