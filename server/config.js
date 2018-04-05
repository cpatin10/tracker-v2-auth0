module.exports = {
    AUTH0_DOMAIN: 'agudelotmateo.auth0.com',
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', 
    //MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/tracker-v2'
    //MONGO_URI: 'mongodb://localhost:27017/tracker-v2' // for local db
    // MONGO_URI: 'mongodb://database/tracker-v2' // for docker-compose
    MONGO_URI: '10.131.137.193:27017,10.131.137.173:27017,10.131.137.189:27017/tracker-v2?replicaSet=rs0'
};
