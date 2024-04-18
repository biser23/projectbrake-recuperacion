const express = require('express')
const { get } = require('mongoose')
const app = express()
require('dotenv').config()
PORT = process.env.PORT || 3000

app.get('/', (req, res) => (res.send('Proyecto BACK')))

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
  })

/*
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000
const routes = require('./routes/tasks');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes);

dbConnection()

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})*/