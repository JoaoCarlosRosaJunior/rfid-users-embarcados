import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import './database';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

dotenv.config();

app.listen(process.env.PORT || 3333, () =>
  console.log('Ther server is running'),
);
