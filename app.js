const express = require('express'); //Creamos una instancia exprres
//innit express app

const app = express(); //almacenamos en App

//Routersnpm
const { RegistrationRouter } = require('./routes/registration.route');

// UTILS
const { db } = require('./utils/database');
const { User } = require('./models/registration.model');

//permitimos rrecibir JSON a nuestra API
app.use(express.json()); //mi app va utilizar JSON como tipo de dato
//Definir Endpoints con Exprees
app.use('/api/v1/registrations', RegistrationRouter); // http://localhost:4000/api/v1/registrations

//conexion a la BD

db.authenticate()
  .then(() => console.log('databese authentica'))
  .catch(err => console.log(err));

db.sync() //{ force: true } es parta volver a recrear la BD (Borra todo des 0)
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = 4000; //El puerto de acceso
app.listen(PORT, () => {
  //Pido a mi app exprees que este a la escucha de peticion
  //console.log(`Express app Runnig on port: ${PORT}`);
});
