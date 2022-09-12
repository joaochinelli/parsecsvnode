const db = require("./index");

const Csv = {
  identificadorURL: {
    type: db.Sequelize.STRING
  },
  nome: {
    type: db.Sequelize.STRING
  },
  categorias: {
    type: db.Sequelize.STRING
  },
  preco: {
    type: db.Sequelize.STRING
  },
  precoPromocional: {
    type: db.Sequelize.STRING              
  },
  peso: {
    type: db.Sequelize.STRING              
  },
  altura: {
    type: db.Sequelize.STRING              
  },
  largura: {
    type: db.Sequelize.STRING              
  },
  comprimento: {
    type: db.Sequelize.STRING              
  },
  estoque: {
    type: db.Sequelize.STRING            
  },
  SKU: {
    type: db.Sequelize.STRING            
  },
  codigoDeBarras: {
    type: db.Sequelize.STRING
  },
  exibirNaLoja: {
    type: db.Sequelize.STRING
  },
  freteGratis: {
    type: db.Sequelize.STRING
  },
  descricao: {
    type: db.Sequelize.TEXT               
  },
  tags: {
    type: db.Sequelize.TEXT               
  },
  tituloParaSEO: {
    type: db.Sequelize.STRING
  },
  descricaoParaSEO: {
    type: db.Sequelize.TEXT               
  },
  marca: {
    type: db.Sequelize.STRING
  },
  produtoFisico: {
    type: db.Sequelize.STRING
  },
  MPN: {
    type: db.Sequelize.STRING
  },
  sexo: {
    type: db.Sequelize.STRING
  },
  faixaEtaria: {
    type: db.Sequelize.STRING
  }

};
   
module.exports = db.sequelize.define("csv", Csv);