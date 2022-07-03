import { Router } from 'express';

const tempRouter = Router();

tempRouter.get('/', (request, response) => {
    return response.json("OK");
});

export default tempRouter;
