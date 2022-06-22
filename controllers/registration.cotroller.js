const { Registration } = require('../models/registration.model');
const getAllRegistration = async (req, res) => {
  try {
    // SELECT * FROM registration;
    const regis = await Registration.findAll();

    res.status(200).json({
      regis, //accedo a mi ojeto res le digo escribeme un JSON en la respuesta
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    const { id, entranceTime, exitTime, status } = req.body;
    //Creamos nueva tabla Registration
    const newRegistration = await Registration.create({
      id,
      entranceTime,
      exitTime,
      status,
    });
    res.status(201).json({ newRegistration }); //Para pasarlo a la BD
  } catch (error) {
    console.log(error);
  }
};

const getRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;
    const regi = await Registration.findOne({ where: { id } });
    res.status(200).json({
      regi,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const { exitTime, status } = req.body;

    const registra = await Registration.findOne({ where: { id } }); //Busco lo que voy a modificar
    if (!registra) {
      return res.status(404).json({
        status: 'Error',
        message: 'user not found given that id',
      });
    }
    await registra.update({ exitTime: req.body.exitTime, status: `out` }); //Modififcamos

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  const { id } = req.params;
  const regi = await Registration.findOne({ where: { id } });
  if (!regi) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found',
    });
  }
  await regi.update({ status: 'Cancelled' });

  res.status(204).json({ status: 'success' });
};

module.exports = {
  getAllRegistration,
  createRegistration,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
};
