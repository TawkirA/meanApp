require('./user');
const mongoose = require('mongoose');
const dbURI = 'mongodb://testUser123:testUser123@justconnect-shard-00-00.d5dy6.mongodb.net:27017,justconnect-shard-00-01.d5dy6.mongodb.net:27017,justconnect-shard-00-02.d5dy6.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-lmeam7-shard-0&authSource=admin&retryWrites=true&w=majority' 
// 'mongodb+srv://testUser123:testUser123@justconnect.d5dy6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose.set('useCreateIndex', true);
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('mongoose connected');
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
