const Tesseract = require('tesseract.js');


Tesseract.recognize(
  './maquette2.PNG', 'eng', { logger: e => console.log(e)})
  .then(e => console.log(e.data.text)
);


