import express, { NextFunction, Request, Response } from 'express';
import "reflect-metadata";
import { AppDataSource } from './database';
import cors from 'cors';
import routers from './routes';
import AppError from './errors/AppError';
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routers);

dotenv.config();

const PORT = process.env.PORT || 3000;

console.log(process.env.DB_HOST)

AppDataSource.initialize().then(async () => {
  console.log('Database OK');
  app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
  })
});

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) return res.status(err.statusCode).json({
      message: err.message
  });

  return res.status(500).json({
      status: "Error",
      message: `Internal server error -> ${err.message}`
  })
});
