import Repository from '../repositories/UserRepository';
import jwt from 'jwt-simple';
import User from '../models/UserModel';
import config from '../config/config';

module.exports = () => {

  const userRepo = new Repository(User);

  const register = (user) => {
    return userRepo.read(user.username).then((foundUser) => {
      if (foundUser) {
        return Promise.reject({
          'status': 400,
          'message': 'User already exists'
        });
      }

      return userRepo.create(user);
    }).then((user) => {
      console.log('created user');
      user.token = jwt.encode(user, config.secret);
      return Promise.resolve(user);
    });
  };

  const readAll = (page, count, fields, orderBy, where) => {
    return userRepo.readAll(page, count, fields, orderBy, where);
  };

  //NOT IN USE
  const checkAuth = (token, roles) => {
    roles = roles || [];
    return new Promise((resolve, reject) => {
      if(!token) {
        reject({
          'status': 401,
          'message': 'You are unauthorized'
        });
      }

      const user = jwt.decode(token, config.secret);
      
      return userRepo.read(user.ud).then((foundUser) => {
        if (foundUser) {
          if (roles.indexOf(foundUser.role) > -1) {
            return resolve(true);
          }

          reject({
            'status': 401,
            'message': 'You are unauthorized'
          });            
        }
      });
    });
  };

  return {
    login: login,
    register: register,
    checkAuth: checkAuth,

    readAll: readAll
  };

};