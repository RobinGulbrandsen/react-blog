import Sequelize from 'sequelize';
import db from '../config/databaseConnection';

const Project = db.define('project', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  startDate: {
    type: Sequelize.DATE,
    field: 'start',
    defaultValue: Sequelize.NOW
  },
  endDate: {
    type: Sequelize.DATE,
    field: 'end',
    defaultValue: Sequelize.NOW
  } 
},{
  freezeTableName: true,
  timestamps: false
});

export default Project;