var mongoose = require('mongoose');
var userProfileSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        userName: String,
        password:String
    }

);

var UserProfileEntity = mongoose.model('UserProfile', userProfileSchema);

module.exports = { UserProfileEntity };