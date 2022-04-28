const express = require('express'); //Creamos una instancia exprres

// Controller
const {
  getAllRepairs,
  createRepairs,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controllers/repairs.controller');
const router = express.Router();
router.get(`/`, getAllRepairs);
router.post(`/`, createRepairs);
router.get('/:id', getRepairById);
router.patch('/:id', updateRepair);
router.delete('/:id', deleteRepair);
module.exports = { repairsRouter: router };
