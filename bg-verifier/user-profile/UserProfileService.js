db = require('../db/DBConnection.js').db;
UserProfileEntity = require('./UserProfileEntity.js').UserProfileEntity;

const createUserProfile = (userProfileInput) =>{

    const promise = new Promise((resolve, reject) => {

        const newUser = new UserProfileEntity({

            name: userProfileInput.name,
            email: userProfileInput.email,
            userName: userProfileInput.userName,
            password: userProfileInput.password
        });

        newUser.save()
            .then((user, err) => {
                if (err)
                    throw err;

                resolve(user);
            });
    });

    return promise;
}

const updateUserProfile = (userProfileInput) => {

    return new Promise((resolve, reject) => {

        UserProfileEntity.findOneAndUpdate({ _id: userProfileInput._id }, { $set: { name: userProfileInput.name } }, { new: true })
            .then((user, error) => {
                if (error)
                    throw error;

                resolve(user);
            });
        }
    );
}

const findUserProfileById = (id) => {

    return new Promise((resolve, reject) => {

        UserProfileEntity.findById(id)
            .then((user, error) => {

                if (error)
                    throw error;
                resolve(user);
            });
    });
}


module.exports = { createUserProfile, updateUserProfile, findUserProfileById};