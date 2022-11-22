const express = require('express');

const UsersService = require('../services/users.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json({ users });
  } catch (err) {
    next(err);
  }
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne({ id });
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const user = await service.create({ body });
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const userUpdate = await service.update({ id, body });
      res.status(200).json(userUpdate);
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userDelete = await service.delete({ id });
      res.status(200).json(userDelete);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
