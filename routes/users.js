const express = require("express");
const { users } = require("../data/users.json");
const { getAllUsers, getUserByID, deleteUser, updateUserById, CreateNewUser, getSubscriptionDetails } = require("../controllers/user-controller");

const router = express.Router();

//Get all list of users
router.get('/', getAllUsers);

//Get a user by ID
router.get('/:id', getUserByID);

//Create a new user
router.post('/', CreateNewUser);

//Update a user details by ID
router.put('/:id', updateUserById);

//Delete a user by ID
router.delete('/:id', deleteUser);

//Get a user subscription details
router.get('/subscription-details/:id', getSubscriptionDetails);

module.exports = router;