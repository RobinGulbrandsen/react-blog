import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/UserModel';

module.exports = (app) => {

  //configure passport
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) {
    console.log('serializeUser', user.username);
    done(null, user.username);
  });

  passport.deserializeUser(function (username, done) {
    console.log('username', username);
    User.findOne({where: {username: username}}).then((user) => {
      done(null, user);
    }).catch((error) => {
      console.log('error deserializing', error);
    });
  });

  passport.use(new LocalStrategy(function (username, password, done) {
    console.log('seaching for user', username);
    User.findOne({where: {username: username}}).then((user) => {
      if (!user || !user.validatePassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    }).catch((error) => {
      return done(error);
    });
  }));

};
