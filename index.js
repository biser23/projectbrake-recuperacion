const express = require('express')
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const routes = require('./routes/products');

app.use('/', routes);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
  })