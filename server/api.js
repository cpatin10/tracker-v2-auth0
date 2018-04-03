// dependencies
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const Location = require('./models/Location');
const User = require('./models/User');


// authentication middleware
module.exports = function (app, config) {
    const jwtCheck = jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
        }),
        audience: config.AUTH0_API_AUDIENCE,
        issuer: `https://${config.AUTH0_DOMAIN}/`,
        algorithm: 'RS256'
    });

    // API routes

    // GET API root
    app.get('/api/', (req, res) => {
        res.send('API works');
    });

    // GET all locations linked to a specific user
    app.get('/api/locations/:userID', jwtCheck, (req, res) => {
        Location.find({ userID: req.params.userID }, (err, locations) => {
            let locationsArray = [];
            if (err)
                return res.status(500).send({ message: err.message });
            if (locations)
                locations.forEach(location => {
                    locationsArray.push(location);
                });
            // empty if none found
            res.send(locationsArray);
        });
    });

    // POST a location linked to a specific user
    app.post('/api/record', jwtCheck, (req, res) => {
        let newLocation = new Location({
            userID: req.body.userID,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        });
        newLocation.save((err) => {
            if (err)
                return res.status(500).send({ message: err.message });
            res.send(newLocation);
        });
    });

    // POST a location linked to a specific user
    app.post('/api/record2', (req, res) => {
        let newLocation = new Location({
            userID: req.body.userID,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        });
        newLocation.save((err) => {
            if (err)
                return res.status(500).send({ message: err.message });
            res.send(newLocation);
        });
    });

    // POST a new user
    app.post('/api/register', jwtCheck, (req, res) => {
        User.find({ userID: req.body.userID }, (err, existingUser) => {
            if (err)
                return res.status(500).send({ message: err.message });
            if (!existingUser.length) {
                let newUser = new User({
                    userID: req.body.userID
                });
                newUser.save((err) => {
                    if (err)
                        return res.status(500).send({ message: err.message });
                    res.send(newUser);
                });
            }
        });
    });

};
