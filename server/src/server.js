import express from 'express';
import bodyParser from 'body-parser';
import DatabaseConfig from './config/databaseConfig';
import passportConfig from './config/passportConfig';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import config from './config/config';
import robots from 'robots.txt';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(robots('./public/robots.txt'));
app.use(cookieParser());
app.use(session({
  secret: config.secret
}));

passportConfig(app);

require('./routes.js')(app);

const port = process.env.devPort || 1337;
console.log('server is listening on port ' + port);

app.listen(port);

module.exports = app;