const { connect, connection } = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialsDB');

// Export connection 
module.exports = mongoose.connection;