'use strict'

class BookController {
    static getAllBooks(req, res) {
        res.json([{
            id: 1,
            title: "Harry Potter"
        }, {
            id: 2,
            title: "Narnia"
        }])
    }
}

module.exports = {
    BookController
}