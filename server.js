// server.js
const express = require('express'); // Importa o módulo express
const app = express(); // Cria uma instância do aplicativo express
const PORT = process.env.PORT || 3000; // Define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Rota principal (root)
app.get('/', (req, res) => {
  res.send('Bem-vindo à BarberShop API!'); // Envia uma resposta de texto simples
});

// Rota de exemplo para agendamentos
app.get('/agendamentos', (req, res) => {
  // Por enquanto, apenas um array vazio. Futuramente, virá do banco de dados.
  const agendamentos = [];
  res.json(agendamentos); // Envia uma resposta JSON
});

// Comentário: Você pode adicionar mais rotas aqui, como POST /agendamentos para criar um novo agendamento, etc.
// Nova rota para verificar o status da API
app.get('/status', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0' });
});

// Rota para autenticação (login)
app.post('/login', (req, res) => {
  // Lógica de autenticação virá aqui. Por enquanto, apenas um placeholder.
  res.status(200).json({ message: 'Endpoint de login (em construção)' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); // Loga uma mensagem quando o servidor inicia
  console.log(`Acesse: http://localhost:${PORT}`); // Informa o endereço para acessar a API
  console.log('API BarberShop inicializada com sucesso!');
});