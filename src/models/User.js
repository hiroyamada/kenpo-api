import Sequelize from 'Sequelize';
import { sequelize } from '../db';

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

export default User;
