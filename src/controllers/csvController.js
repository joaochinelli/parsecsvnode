const Csv = require("../models/csvModel");
const fs = require("fs");

const fastCsv = require("fast-csv");

module.exports = {
    upload(req, res){
        try {
            if (req.file == undefined) {
                return res.status(400).json({
                    message: "Faça o upload de um arquivo CSV!"
                });
            }

            let path = __dirname + "../../uploads/" + req.file.filename;

            fs.createReadStream(path).pipe(fastCsv.parse({ 
                skipLines: 1
            }))
            .on("error", (error) => {
                throw error.message;
            })
            .on("data", async (row) => {
                
                const data = {
                    identificadorURL: (row[0]) ? row[0] : '',
                    nome: (row[1]) ? row[1] : '',
                    categorias: (row[2]) ? row[2] : '',
                    preco: (row[3]) ? row[3] : '',
                    precoPromocional: (row[4]) ? row[4] : '',
                    peso: (row[5]) ? row[5] : '',
                    altura: (row[6]) ? row[6] : '',
                    largura: (row[7]) ? row[7] : '',
                    comprimento: (row[8]) ? row[8] : '',
                    estoque: (row[9]) ? row[9] : '',
                    SKU: (row[10]) ? row[10] : '',
                    codigoDeBarras: (row[11]) ? row[11] : '',
                    exibirNaLoja: (row[12]) ? row[12] : '',
                    freteGratis: (row[13]) ? row[13] : '',
                    descricao: (row[14]) ? row[14] : '',
                    tags: (row[15]) ? row[15] : '',
                    tituloParaSEO: (row[16]) ? row[16] : '',
                    descricaoParaSEO: (row[17]) ? row[17] : '',
                    marca: (row[18]) ? row[18] : '',
                    produtoFisico: (row[19]) ? row[19] : '',
                    MPN: (row[20]) ? row[20] : '',
                    sexo: (row[21]) ? row[21] : '',
                    faixaEtaria: (row[22]) ? row[22] : ''
                } 
                
                const dados = await Csv.create(data);

            })
            .on("end", () => {

                res.status(200).json({
                    message : "Upload finalizado!"
                });
                
            });
        } catch (error) {
            res.status(500).json({
                message : "Não foi possivel fazer o upload do arquivo: " + req.file.originalname,
                error
            });
        }
    }
};




await prisma.csv.create({
        data: {
          identificadorURL: (row[0]) ? row[0] : '',
          nome: (row[1]) ? row[1] : '',
          categorias: (row[2]) ? row[2] : '',
          preco: (row[3]) ? row[3] : '',
          precoPromocional: (row[4]) ? row[4] : '',
          peso: (row[5]) ? row[5] : '',
          altura: (row[6]) ? row[6] : '',
          largura: (row[7]) ? row[7] : '',
          comprimento: (row[8]) ? row[8] : '',
          estoque: (row[9]) ? row[9] : '',
          SKU: (row[10]) ? row[10] : '',
          codigoDeBarras: (row[11]) ? row[11] : '',
          exibirNaLoja: (row[12]) ? row[12] : '',
          freteGratis: (row[13]) ? row[13] : '',
          descricao: (row[14]) ? row[14] : '',
          tags: (row[15]) ? row[15] : '',
          tituloParaSEO: (row[16]) ? row[16] : '',
          descricaoParaSEO: (row[17]) ? row[17] : '',
          marca: (row[18]) ? row[18] : '',
          produtoFisico: (row[19]) ? row[19] : '',
          MPN: (row[20]) ? row[20] : '',
          sexo: (row[21]) ? row[21] : '',
          faixaEtaria: (row[22]) ? row[22] : ''
        } 
      });