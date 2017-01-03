import Sequelize from 'sequelize';
import bcrypt from 'bcrypt-nodejs';
import db from '../config/databaseConnection';

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  password: Sequelize.STRING,
  salt: Sequelize.STRING,
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
  timestamps: false,
  instanceMethods: {
    validPassword: function(password) {
      return bcrypt.hashSync(password, this.salt) === this.password;
    }
  },
  hooks: {
    beforeCreate: function(user, options, cb) {
      user.salt = bcrypt.genSaltSync(8);
      user.password = bcrypt.hashSync(user.password, user.salt);
      cb(null, options);
    }
  }
});

export default User;