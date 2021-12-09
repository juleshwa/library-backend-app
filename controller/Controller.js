'use strict'

class Controller {
    // Homepage Controller
    static homepage(req, res) {
        res.json({
            "success": true,
            "error": [

            ],
            "message": "Aplikasi Perpustakaan Sekolah",
            "result": [

            ]
        });
    }

    // Login Controller
    static login(req, res) {
        console.log(req.body);
        res.send(`login`);
    }

    // Register Controller
    static register(req, res) {
        console.log(req.body);
        res.send(`halaman register`);
    }

}

module.exports = {
    Controller
}