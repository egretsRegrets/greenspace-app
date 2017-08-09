const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// test schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'You should supply your name'
    }
});

module.exports = mongoose.model('User', userSchema);