import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req:any, res:any) => {
  res.send('Bem-vindo ao Express com TypeScript e Nodemon!');
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
