const path = require('path');

//Pega apenas o nome do arquivo atual

console.log(path.basename(__filename));

// Pega o nome do diretorio atual
console.log(path.dirname(__filename));

// Pega a extensão do arquivo
console.log(path.extname(__filename));

// Cria um objeto path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos adiciona
console.log(path.join(__dirname,'proxima pasta','proximo arquivo'))