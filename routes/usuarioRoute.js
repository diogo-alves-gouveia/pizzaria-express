const express = require("express");

const route = express.Router();

route.get("/:nome", (req, res) => {

    // let nomeDigitado = req.params.nome

    let {nome} = req.params; //Desestruturação

    res.send(`Seja bem vindo ${nome}!`); //Template string (usada para digitar um javascript dentro de uma script sem precisar ficar concatenando)

});

module.exports = route;