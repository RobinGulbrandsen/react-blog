import Sequelize from 'sequelize';
import db from '../config/databaseConnection';

const Article = db.define('article', {
  titleId: {
    type: Sequelize.STRING,
    field: 'title_id',
    primaryKey: true
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  intro: Sequelize.TEXT,
  ready: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0
  },
  visible: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  } 
},{
  freezeTableName: true
});

export default Article;