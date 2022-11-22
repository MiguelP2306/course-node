const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UsersService {
  constructor() {
    this.users = [];
  }

  async findOne({ id }) {
    const user = await models.User.findByPk(id);

    if (!user) throw boom.notFound('User not found');

    return user;
  }

  async find() {
    const data = await models.User.findAll();

    if (data.length === 0) throw boom.notFound('Users not found');

    return data;
  }

  async create({ body }) {
    const newUser = await models.User.create(body);
    return newUser;
  }

  async update({ id, body }) {
    const user = await this.findOne({ id });
    const res = await user.update(body);
    return res;
  }

  async delete({ id }) {
    const user = await this.findOne({ id });
    await user.destroy();
    return { id };
  }
}

module.exports = UsersService;
