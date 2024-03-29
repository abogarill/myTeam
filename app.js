// app.js
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

// Imports routes
const developer = require('./routes/developer.route'); 
const views = require('./routes/views.route'); 

// initialize our express app
const app = express();
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/myTeam/developers', developer);
app.use('/', views);

// Set up mongoose connection
let dev_db_url = 'mongodb+srv://myteam:teammy@myteam-rbd2r.mongodb.net/test?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useFindAndModify: false});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Start
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});