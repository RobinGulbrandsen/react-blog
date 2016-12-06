import express from 'express';
import bodyParser from 'body-parser';
import DatabaseConfig from './config/databaseConfig';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

require('./routes.js')(app);

const port = process.env.devPort || 1337;
console.log('server is listening on port ' + port);

app.listen(port);

module.exports = app;