require('dotenv').config();
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const rawPassword = process.env.DEMO_PASSWORD || 'test';
    const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(rawPassword, saltRounds);
    } catch (error) {
      console.log('Error in seeding: ', error.message);
    }
    const user = [
      {
        email: process.env.DEMO_EMAIL || 'test@mail.ru',
        login: process.env.DEMO_USER,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', user, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
