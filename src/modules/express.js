const express = require("express");
const gravar = require("../models/grava");
const consulta = require("../models/consulta");
const filtro = require("../models/filtro");
const altera = require('../models/altera');
const Delete = require('../models/deleta')
const port = 3000;

const app = express();

app.use(express.json());

//Middleware
app.use((req, res, next)=>{
    console.log(' Dentro da MiddleWare');
    next();
})

app.get("/home", (req, res) => {
  res.type("html");
  res.status(200).send("<h1> Servidor em Express</h1>");
});

app.get("/json", (req, res) => {
  res.status(200).json({ nome: "Wilhiam Junior" });
});

app.post("/gravar", async (req, res) => {
  try {
    const body = req.body;
    console.log("req", body);
    const Gravar = await gravar(body);
    res.status(201).json({ message: "Sucesso!", body: Gravar });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/consulta", async (req, res) => {
  try {
    const result = await consulta();
    console.log('Aqui',result)
      res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/consulta/:nome", async(req,res)=>{
    try{

        const name = req.params.nome;
        console.log('aqui ei ',name);
        const  result = await filtro(name);
        res.status(201).json(result);
    }catch(error){
        res.status(500).send(error.message);
    }
})

app.patch('/altera/:data',async (req , res)=>{
    console.log('altera',req.body)
    try{
        const name = req.params.data;
        const {Email}= req.body;
        const params ={ name: name,email:Email };
        const result = await altera(params);
        res.status(201).json(result);
    }catch(error){
        res.status(500).send(error.message);
    }
})
app.delete('/delete/:name',async(req, res)=>{
    try{
        const data = req.params.name;
        const result = await Delete(data);
        res.status(201).json(result)

    }catch(error){
        res.status(500).send(error.message)
    }
})
app.listen(port, () => console.log("Rodando com express "));
