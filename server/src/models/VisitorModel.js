import Sequelize from 'sequelize';
import db from '../config/databaseConnection';

const Visitor = db.define('visitor', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  visitor: {
    type: Sequelize.STRING,
    primaryKey: true
  }
},{
  freezeTableName: true
});

export default Visitor;