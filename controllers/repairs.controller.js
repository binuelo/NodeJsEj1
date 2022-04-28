const { Repair } = require('../models/repair.model');

const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll();
    res.status(200).json({
      repairs,
    }); //accedo a mi ojeto res le digo escribeme un JSON en la respuesta
  } catch (error) {
    console.log(error);
  }
};

const createRepairs = async (req, res) => {
  try {
    const { id, date, status, userId } = req.body;
    //Creamos nueva tabla Repair
    const newRepair = await Repair.create({ date, status, userId });
    res.status(201).json({ newRepair }); //Para pasarlo a la BD
  } catch (error) {
    console.log(error);
  }
};
const getRepairById = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id } });
    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;

    const repair = await Repair.findOne({ where: { id } }); //Busco lo que voy a modificar

    await repair.update({ date }); //Modififcamos

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;
    // DELETE FROM ...
    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      return res.status(404).json({
        status: 'Error',
        message: 'user not found given that id',
      });
    }
    await repair.update({ status: 'cancelled' });
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairById,
  updateRepair,
  deleteRepair,
};
