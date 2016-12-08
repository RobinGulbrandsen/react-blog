import db from './databaseConnection';

import ArticleModel from '../models/ArticleModel';
import VisitorModel from '../models/VisitorModel';

const initializeModels = () => {
  ArticleModel.hasMany(VisitorModel, {foreignKey: 'id'});
  VisitorModel.belongsTo(ArticleModel, {foreignKey: 'id'});
};

// Build the models
initializeModels();

// Sync the database
db.sync({ force: false })
.then(() => {
  console.log('Successfully synced models');
})
.catch(err => {
  console.log('An error occurred while creating the table:', err);
});

export default initializeModels;