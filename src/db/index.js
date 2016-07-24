import environment from '../config/environment';
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(environment.dbConnection);
