import Sequelize from 'Sequelize';
import { sequelize } from '../../db';

const Like = sequelize.define('like', {
  ip: Sequelize.STRING
});

export default Like;
