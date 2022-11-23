const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
app.use(express.json())

const cors = require('cors')
app.use(cors())
/*Gère les erreurs de CORS*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


mongoose.connect(process.env.MONGODB_connection_string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const Routes = require('./routes/things');
app.use('/api/candidats', Routes);





// app.use((req, res, next) => {
//   console.log('Requête reçue !');
//   next();
// });

// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ message: 'Votre requête a bien été reçue !' });
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Réponse envoyée avec succès !');
// });

module.exports = app;