import { Router } from 'express';
import { getRepository } from 'typeorm';

import Property from '../models/Property';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const propertiesRouter = Router();

propertiesRouter.use(ensureAuthenticated);

propertiesRouter.get('/', async (req, res) => {
  const propertyRepository = getRepository(Property);

  const properties = await propertyRepository.find();

  return res.json(properties);
});

propertiesRouter.get('/:id', async (req, res) => {
  const propertyRepository = getRepository(Property);

  const { id } = req.params;

  const property = await propertyRepository.findOne({ id });

  return res.json(property);
});

propertiesRouter.post('/', async (req, res) => {
  const propertyRepository = getRepository(Property);

  const { zip_code, number, complement, rent, rooms, avaliable } = req.body;

  const property = propertyRepository.create({
    zip_code,
    number,
    complement,
    rent,
    rooms,
    avaliable,
    user_id: req.body.user.id,
  });

  await propertyRepository.save(property);

  return res.json(property);
});

propertiesRouter.put('/:id', async (req, res) => {
  const propertyRepository = getRepository(Property);

  const { id } = req.params;

  const property = await propertyRepository.findOne(id);

  const updatedProperty = { ...property, ...req.body };

  await propertyRepository.save(updatedProperty);

  return res.json(updatedProperty);
});

propertiesRouter.delete('/:id', async (req, res) => {
  const propertyRepository = getRepository(Property);

  const { id } = req.params;

  await propertyRepository.delete({ id });

  return res.json('Sucesso!');
});

export default propertiesRouter;
