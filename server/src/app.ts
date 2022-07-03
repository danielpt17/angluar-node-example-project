import express, { Application, Request, Response } from 'express';
import routes from './lib/routes';

const app: Application = express()

const port: number = 3001;

app.use(express.json());
app.use(routes);

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
