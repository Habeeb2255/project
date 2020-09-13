const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userName: {type: String},
    email: {type: String, required: true},
    password: {type: String, Required: true}

}); 


module.exports = mongoose.model('user', userSchema);