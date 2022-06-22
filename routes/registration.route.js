const express = require('express'); //Creamos una instancia exprres

// Controller
const {
  getAllRegistration,
  createRegistration,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registration.cotroller');
const router = express.Router();
router.get(`/`, getAllRegistration);
router.post(`/`, createRegistration);
router.get('/:id', getRegistrationById);
router.patch('/:id', updateRegistration);
router.delete('/:id', deleteRegistration);

module.exports = { RegistrationRouter: router };
