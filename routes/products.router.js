const express = require('express');

const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json({ products });
});

router.get('/filter', async (req, res) => {
  try {
    const { name } = req.query;
    const product = await service.findOne({ name });
    res.json({ product });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

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
