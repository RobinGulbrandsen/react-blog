import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/UserModel';

module.exports = (app) => {

  //configure passport
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) {
    done(null, user.username);
  });

  passport.deserializeUser(function (username, done) {
    User.findOne({where: {username: username}}).then((user) => {
      done(null, user);
    }).catch((error) => {
      console.log('error deserializing', error);
    });
  });

  passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({where: {username: username}}).then((user) => {
      if (!user || !user.validPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    }).catch((error) => {
      return done(error);
    });
  }));

};
