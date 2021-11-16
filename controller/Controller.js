'use strict'

class Controller {
    static homepage(req, res) {
        res.json({ halaman: 1 });
    }
}

module.exports = {
    Controller
}