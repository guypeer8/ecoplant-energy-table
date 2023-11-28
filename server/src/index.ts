import cors from 'cors';
import express from 'express';
import apiRouter from './routers/api.router';
import { loadEnvVars } from './utils/load-utils';

loadEnvVars();

const app: express.Express = express();
const port: string = process.env.NODE_PORT || '3001';

app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});