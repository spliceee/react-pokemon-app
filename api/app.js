// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 8080;

// Routes
const user = require('./routes/User.route');
const app = express();

const { USERNAME, PASSWORD, HOST, PORT, DB_NAME } = require('./db_config')();
const db_url = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', user)

// Start server
app.listen(port, () => {
  console.log(`API_URL: http://localhost:${port}/api`);
});
