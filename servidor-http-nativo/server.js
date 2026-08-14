import http from 'node:http'

const porta = 3000

const server = http.createServer();


    const requisicao = (req, res) => {
   console.log('Requisição recebida! ${req.method} ${req.url}');

res.statusCode = 201
res.setHeader('Content-Type', 'text/plain charse= utf-8');
//'application/json'
res.end("Recurso Criado");
//JSON.stringify({"Mensagem":"Valor"})
}

server.on('request', requisicao);

server.listen(porta, () => {
    console.log('Servidor ouvindo na porta ${porta}')
});