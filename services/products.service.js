const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
class ProductsService {
  constructor() {
    this.products = [];
  }

  async create({ product }) {
    this.products.push(product)
  }

  async find() {
    const [data] = await sequelize.query('SELECT * FROM tasks');
    return data;
  }

  async findOne({ name }) {
    const product = this.products.filter(item => item.name.toLowerCase() === name.toLowerCase())

    if (product.length === 0) {
      throw boom.notFound('Product not found');
    }

    return product;
  }

  async update() {}
  async delete() {}
}

module.exports = ProductsService;
