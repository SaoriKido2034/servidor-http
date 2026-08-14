import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const server = http.createServer()

const requisicao = (req, res) => {
    console.log(new Date().toISOString());

    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && urlObj.pathname === '/saudacao') {
        const nome = urlObj.searchParams.get('nome');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ nome }));
    }

    if (req.method === 'GET' && urlObj.pathname === '/produtos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ data: 'Pipito' }));
    }

    if (req.method === 'GET' && urlObj.pathname === '/contatos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ data: [{ telefone: '67 3441-8922' }, { 'e-mail': 'pirilampo@gmail.com' }] }));
    }

    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.end('Recurso criado');
}

server.on('request', requisicao);

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});