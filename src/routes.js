import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'ola3!!!!' }));
export default routes;
