import http from 'node:http'

const porta = 3000

const server = http.createServer();


    const requisicao = (req, res) => {
   console.log('Requisição recebida! ${req.method} ${req.url}');

res.statusCode = 200
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify({"Kuhr":"Kuhrff"}));
}

server.on('request', requisicao);

server.listen(porta, () => {
    console.log('Servidor ouvindo na porta ${porta}')
});