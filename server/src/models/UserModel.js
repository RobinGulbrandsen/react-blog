import Sequelize from 'sequelize';
import db from '../config/databaseConnection';

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  password: Sequelize.STRING,
  role: {
    type: Sequelize.STRING,
    defaultValue: 'Member'
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
},{
  freezeTableName: true,
  timestamps: false
});

export default User;