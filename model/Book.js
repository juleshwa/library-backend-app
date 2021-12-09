'use strict'

const sql = require('../config/db');

class Book {
    constructor(id, title, author, year, genre, created_at) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.created_at = created_at;
    }

    static showAllBooks(result) {
        let query = "SELECT * FROM books";
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                let rawData = res;
                let books = []
                let book;
                rawData.forEach(each => {
                    book = new Book(each.id, each.title, each.author, each.year, each.genre, each.created_at);
                    books.push(book);
                });
                // console.log(books);
                result(null, books);
            }
        })
    }

    static showBookById(id, result) {
        let query = `SELECT * FROM books WHERE id = ${id}`;
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                let rawData = res;
                let book;
                rawData.forEach(each => {
                    book = new Book(each.id, each.title, each.author, each.year, each.genre, each.created_at);
                });
                console.log(book);
                result(null, book);
            }
        })
    }

    static postNewBook(payload, result) {
        payload.year = +payload.year;
        // console.log(payload);
        let query = `INSERT INTO books SET ?`

        sql.query(query, payload, (err, res) => {
            let postStatus;
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                postStatus = true;
                result(null, postStatus);
            }
        })
    }

    static updateBookData(id, payload, result) {
        payload.year = +payload.year;
        id = +id;
        let date = new Date();
        let query = `UPDATE books SET title = ?, author = ?, year = ?, genre = ?, created_at = ? WHERE id = ?`;
        let updatedBook = [payload.title, payload.author, payload.year, payload.genre, date, id]
        sql.query(query, updatedBook, (err, res) => {
            let postStatus;
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                // Book with ID not found

                if (res.affectedRows == 0) {
                    let errMessage = {
                        message: `Book with ${id} is not found`
                    }
                    result(errMessage, null);
                } else {
                    postStatus = true;
                    result(null, postStatus);
                }

            }
        })
    }

    static deleteBookData(id, result) {
        let query = `DELETE FROM books WHERE id = ?`
        sql.query(query, id, (err, res) => {
            let status;
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                console.log(res);
                status = true;
                result(null, status)
            }

        })

    }
}

module.exports = { Book }