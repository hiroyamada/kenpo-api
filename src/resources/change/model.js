import Sequelize from 'Sequelize';
import { sequelize } from '../../db';
import Like from '../likes/model';

const Change = sequelize.define('change', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  original: Sequelize.TEXT,
  revision: Sequelize.TEXT
});

Change.hasMany(Like);
Like.belongsTo(Change);

sequelize.sync();

export default Change;
