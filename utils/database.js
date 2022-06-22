const { Sequelize } = require(`sequelize`);

const db = new Sequelize({
  dialect: 'postgres', //Seleccionamos el Dialecto de la BD
  host: 'localhost',
  username: 'postgres',
  password: 'Cruz4azu1',
  database: 'Employees',
  logging: false, //para que no me imprima el ingreso de la BD en la terminal
});

module.exports = { db };
