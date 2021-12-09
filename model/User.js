'use strict'

const e = require('express');
const sql = require('../config/db');

class User {
    constructor(id, name, username, password, birthdate, avatar, address, library_id, created_at) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.birthdate = birthdate;
        this.avatar = avatar;
        this.address = address;
        this.library_id = library_id;
        this.created_at = created_at;

    }

    static showAllUser(result) {
        let query = "SELECT * FROM users";
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                let data;
                if (res.length == 0) {
                    data = [{}]
                } else {
                    data = new User();
                }

                result(null, data);
            }
        })
    }
}

module.exports = { User }