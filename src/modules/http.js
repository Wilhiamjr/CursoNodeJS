const http = require('http');


const port = 8080;

const server = http.createServer((req, res)=>{

    if (req.url === '/'){
        res.writeHead(200,{'content-type':'html'})
        res.end('<h1> Server Criado Com Sucesso!</h1>')
    }
    if(req.url === '/home'){
        res.writeHead(200,{
           'content-type': 'application/json'
        })
        res.end(JSON.stringify([{
            nome:'Wilhiam Junior '
        }]))
    }
})


server.listen(port, ()=>console.log('Rodando OK'))