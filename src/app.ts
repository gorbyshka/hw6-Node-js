import express, { Application } from 'express';
import bodyParser from 'body-parser';
import firstRoutes from './routes/firstRouter';
import second2Routes from './routes/secondRouter';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

const app: Application = express();

app.use(bodyParser.json());

app.use('/router1', firstRoutes);
app.use('/router2', second2Routes);

app.use(errorHandlerMiddleware);

const PORT: number = 3000;

app.listen(PORT, () =>  console.log(`Server is running on port ${PORT}`));
