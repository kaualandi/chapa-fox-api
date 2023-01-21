import bodyParser from 'body-parser';
import express, { Request, Response, Router } from 'express';
import { connect } from './config/db';
import { eventRouter } from './routes/event';
import { financeRouter } from './routes/finance';
import { meRouter } from './routes/me';
import { newsRouter } from './routes/news';
import { newspaperRouter } from './routes/newspaper';
import { userRouter } from './routes/user';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const route = Router();

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

connect(process.env.MONGO_URL || '');

route.get('/', (req: Request, res: Response) => {
  res.json({ detail: 'Running...' });
})

app.use(route);

app.use('/', meRouter);
app.use('/users', userRouter);
app.use('/finances', financeRouter);
app.use('/newspapers', newspaperRouter);
app.use('/news', newsRouter);
app.use('/events', eventRouter);

app.listen(3333, () => console.log('server running on port 3333'));