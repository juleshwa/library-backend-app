'use strict'

const { User } = require('../model/User');

class UserController {
    static getAllUsers(req, res) {
        User.showAllUser((err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json({ status: 200, data })
            }
        })
    }

    static getUserById(req, res) {
        res.send(`user by id`)
    }
}

module.exports = {
    UserController
}