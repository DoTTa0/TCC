import express from 'express';
import "reflect-metadata";
import { AppDataSource } from './database';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req:any, res:any) => {
  res.send('Bem-vindo ao Express com TypeScript e Nodemon!');
});

AppDataSource.initialize().then(async () => {
  console.log('Database OK');
  app.listen(3333, () => {
      console.log(`Server started on port ${PORT}`);
  })
})