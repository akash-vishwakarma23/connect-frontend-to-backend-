const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    age: Number,
    contact: Number

})

module.exports = mongoose.model('User', userSchema);