const express = require('express');
const appRouter = express.Router();

const con = require("../config/connection");

const bodyParser = require("body-parser");
appRouter.use(bodyParser.urlencoded({extended:true}));
appRouter.use(bodyParser.json());

let sql_all = 'CALL usp_listar_books()';
let sql_insert = 'CALL usp_insertar_books()';

appRouter.get('/books', (req,res) => {
    con.query(sql_all,(error,results) => {
        if (error) {
            throw error;
        }
        res.send(results);
    })
});

appRouter.post('/books', (req,res) => {
    const book = {
        book_title: req.body.book_title,
        book_author: req.body.book_author,
        book_published: req.body.book_published
    }
    con.query(sql_insert, [book.book_title,book.book_author,book.book_published],
        (error,results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        }
    )
})

module.exports=appRouter;