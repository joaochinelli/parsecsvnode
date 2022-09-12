const express = require("express");
const app = express();
const banco = require("./models");

app.use(require('./route/routes'));

app.use(express.urlencoded({ extended: true }));

banco.sequelize.sync();

var porta = 4444;

app.listen(porta, () => {
  console.log(`Start http://localhost:${porta}`);
});