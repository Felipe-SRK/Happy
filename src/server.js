// importar dependencia

const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando exporess
const server = express()
server
//usar body do req
.use(express.urlencoded({extended: true}))
//usando arquivo estatico
.use(express.static('public'))

//Configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
//criar rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligar servidor 

server.listen(5500)