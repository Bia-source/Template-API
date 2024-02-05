import express from 'express';
const app = express();

app.use(express.json());

let mensagens = [];

app.get('/mensagem', (req, res) => {
    res.json(mensagens);
});

app.post('/mensagem', (req, res) => {
    const { mensagem, receiver, sender } = req.body;
    mensagens.push({ mensagem, receiver, sender });
    console.log(mensagens)
    res.json({ 
        status: 'Mensagem armazenada com sucesso!',
        mensagens: mensagens[0]
 });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});