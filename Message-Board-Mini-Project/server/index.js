import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import postsRouter from './routes/posts.js';

dotenv.config();
const app = express();
app.disable('etag');
app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRouter);

app.listen(process.env.PORT, () =>
  console.log('API listening on', process.env.PORT)
);