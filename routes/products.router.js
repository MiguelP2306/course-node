const express = require('express');

const ProductsService = require('../services/products.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getProductSchema } = require('../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json({ products });
  } catch (err) {
    next(err);
  }
});

router.get(
  '/filter',
  validatorHandler(getProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const { name } = req.query;
      const product = await service.findOne({ name });
      res.json({ product });
    } catch (e) {
      next(e);
    }
  }
);

router.post('/', async (req, res) => {
  const body = req.body;
  await service.create({ product: body });
  res.status(201).json(body);
});

router.patch('/:id', async (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({ ...body, id });
});

module.exports = router;
