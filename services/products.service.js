class ProductsService {
  constructor() {
    this.products = [];
  }

  async create({ product }) {
    this.products.push(product)
  }

  async find() {
    return this.products;
  }

  async findOne({ name }) {
    const product = this.products.filter(item => item.name.toLowerCase() === name.toLowerCase())

    if (product.length === 0) {
      throw new Error('El producto no existe');
    }

    return product;
  }

  async update() {}
  async delete() {}
}

module.exports = ProductsService;
