import { Router } from 'express';

import usersRouter from './users.routes';
import propertiesRouter from './properties.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/properties', propertiesRouter);

export default routes;
