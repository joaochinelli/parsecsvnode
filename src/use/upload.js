const multer = require("multer");
const path = require("path");


module.exports = multer({

  arqCsv: (req, file, cb) => {
    if (file.mimetype.includes("csv")) {
      cb(null, true);
    } else {
      cb("Apenas arquivos CSV", false);
    }
  },

  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', 'uploads'),
    filename: (req, file, cb) => {
      const newName = Date.now()
      cb(null, `${newName}-${file.originalname}`);
    }
  })
  
});