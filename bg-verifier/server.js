var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userService = require('./user-profile/UserProfileService.js');

app.use(bodyParser.json());
app.route('/user-profile')
    .post((req, resp) => {

        console.log('received in post method');
        userService.createUserProfile(req.body)
            .then((user) => { resp.send(user); resp.end });
    }).put((req, resp) => {
        console.log('received in PUT method');
        userService.updateUserProfile(req.body)
            .then((user) => { resp.send(user); resp.end });

    });

app.get('/user-profile/:id', (req, resp) => {

    console.log('Received response in GET' + req.params.id);
    userService.findUserProfileById(req.params.id)
        .then((user) => { resp.send(user); resp.end });
});

app.listen(3000);