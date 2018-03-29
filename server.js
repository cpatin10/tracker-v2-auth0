// dependencies 

// modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
// config
const config = require('./server/config');


// mongo
mongoose.connect(config.MONGO_URI);
const monDb = mongoose.connection;

monDb.on('error', function () {
    console.error('MongoDB Connection Error. Please make sure that', config.MONGO_URI, 'is running.');
});

monDb.once('open', function callback() {
    console.info('Connected to MongoDB:', config.MONGO_URI);
});


// app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

// Set port
const port = process.env.PORT || '8083';
app.set('port', port);

// set static path to Angular app in dist if not in dev
if (process.env.NODE_ENV !== 'dev') 
    app.use('/', express.static(path.join(__dirname, './dist')));


// routes
require('./server/api')(app, config);

// pass routing to Angular app if not in dev
if (process.env.NODE_ENV !== 'dev') 
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '/dist/index.html'));
    });

// run server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
