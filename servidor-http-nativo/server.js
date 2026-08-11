const http = require('node:http')

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) => {
   console.log('Servidor funcionando! ${req.method} ${req.url}');

res.statusCode = 200
res.setHeader('Content-Type', 'text/plain; cherset=utf-8');
res.end("Servidor Funcionando!");
});

server.listen(porta, ()=> {
    console.log('Servidor ouvindo na porta ${porta}')
});