const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({MSG:"Olá, mundo"})
})

module.exports = routes;