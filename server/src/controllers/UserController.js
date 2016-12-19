import passport from 'passport';
import User from '../models/UserModel';

module.exports = {

  logout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  },

  signup: (req, res) => {
    User.create(req.body).then((user) => {
      res.send(user);
    }).catch((error) => {
      res.status(500).send(error);
    });
  }
};