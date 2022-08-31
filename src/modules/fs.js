const fs = require("fs");
const path = require("path");

//Criar uma pasta

fs.mkdir(
  path.join(__dirname, "./teste"),
  (error) => {
    if (error) {
      return console.log("Erro", error);
    }
    //Criar um arquivo
    fs.writeFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "hello word",
      (error) => {
        if (error) {
          return console.log("Erro", error);
        }
        //Adicionar a um arquivo existente
        fs.appendFile(
          path.join(__dirname, "/teste", "teste.txt"),
          "Olá Mundo",
          (error) => {
            if (error) {
              return console.log(error);
            }
            //Ler arquvio
            fs.readFile(
              path.join(__dirname, "/teste", "teste.txt"),
              "utf-8",
              (error, data) => {
                if (error) {
                  return console.log(error);
                }
                console.log(data);
              }
            );
            console.log("Arquivo modificado com sucesso");
          }
        );
      },
      console.log("Arquivo criado com sucesso")
    );
  },
  console.log("Ok")
);
