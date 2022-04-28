const { User } = require('../models/user.model');
const getAllusers = async (req, res) => {
  try {
    // SELECT * FROM users;
    const users = await User.findAll();

    res.status(200).json({
      users, //accedo a mi ojeto res le digo escribeme un JSON en la respuesta
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { id, name, email, password, role, status } = req.body;
    //Creamos nueva tabla Usuario
    const newUser = await User.create({ name, email, password, role, status });
    res.status(201).json({ newUser }); //Para pasarlo a la BD
  } catch (error) {
    console.log(error);
  }
};

const getUSerById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({ where: { id } }); //Busco lo que voy a modificar

    await user.update({ name, email }); //Modififcamos

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // DELETE FROM ...
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        status: 'Error',
        message: 'user not found given that id',
      });
    }
    await user.update({ status: 'disabled' });
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllusers,
  createUser,
  getUSerById,
  updateUser,
  deleteUser,
};
