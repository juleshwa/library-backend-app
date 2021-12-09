'use strict'

const { Book } = require('../model/Book');

class BookController {

    static getAllBooks(req, res) {
        Book.showAllBooks((err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        })
    }

    static getBookById(req, res) {
        let id = req.params.id;
        // console.log('id', id);
        Book.showBookById(id, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    }

    static addNewBook(req, res) {
        // console.log(req.body);
        Book.postNewBook(req.body, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                if (data) {
                    res.json({
                        status: 200,
                        message: 'Created Success!'
                    })
                }
            }
        })

    }

    static updateBook(req, res) {
        let id = req.params.id;
        Book.updateBookData(id, req.body, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                if (data) {
                    res.json({
                        status: 200,
                        message: 'Update Success!'
                    })
                }
            }
        })
    }

    static deleteBook(req, res) {
        let id = req.params.id;
        Book.deleteBookData(id, (err, data) => {
            if(err) {
                console.log(err);
            } else {
                if(data) {
                    res.json({
                        status: 200,
                        message: 'Delete Success!'
                    })
                }
            }
        })
    }
}

module.exports = {
    BookController
}