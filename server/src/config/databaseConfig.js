import db from './databaseConnection';

const initializeModels = () => {
  //Entity Relation Ships
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