'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model');

const ROLE_FIELD = 'role';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, ROLE_FIELD, UserSchema.role);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, ROLE_FIELD);
  }
};
