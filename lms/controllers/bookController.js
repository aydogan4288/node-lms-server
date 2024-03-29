var routes = require("express").Router();
var db = require("../dao/db");
var bookDao = require("../dao/bookDao");

routes.get("/book", function(req, res) {
  // console.log("that prints out");
  bookDao.getAllBooks(function(error, result) {
    if (error) throw error;
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  });
});

routes.get("/book/edit/:id", function(req, res) {
  console.log("book/edit");
  let id = req.params.id;
  console.log("in the bookController and got the id: " + id);
  bookDao.getBookById(id, function(err, result) {
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  });
});

routes.post("/book", function(req, res) {
  var book = req.body;
  bookDao.addBook(book, function(err, result) {
    if (err) {
      res.status(400);
      res.send("Add Book Failed!");
    }
    res.status(201);
    res.send("Add Book Successful!");
  });
});

routes.delete("/book/:id", function(req, res) {
  bookDao.removeBook(req.params.id, function(err, result) {
    if (err) {
      res.status(400);
      res.send("Delete Book Failed!");
    }
    res.send("Delete Book Successful!");
  });
});

routes.put("/book", function(req, res) {
  var book = req.body;
  bookDao.updateBook(book, function(err, result) {
    if (err) {
      res.status(400);
      res.send("Update Author Failed!");
    }
    res.send("Update Book Successful!");
  });
});

module.exports = routes;
