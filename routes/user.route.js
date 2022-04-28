const express = require('express'); //Creamos una instancia exprres

// Controller
const {
  getAllusers,
  createUser,
  getUSerById,
  updateUser,
  deleteUser,
} = require('../controllers/user.cotroller');
const router = express.Router();
router.get(`/`, getAllusers);
router.post(`/`, createUser);
router.get('/:id', getUSerById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = { usersRouter: router };
