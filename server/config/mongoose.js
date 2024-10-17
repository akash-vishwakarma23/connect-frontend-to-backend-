const mongoose = require('mongoose');
const debuglog = require('debug')('development:mongooseconfig');

mongoose.connect('mongodb://127.0.0.1:27017/merntest');

const db = mongoose.connection;

db.on("error", function (err) {
    console.error('MongoDB connection error:', err); 
});

db.on("open", function(){
    console.log('Connected to MongoDB!');  // Successful connection to MongoDB server
    
})

module.exports = db;
