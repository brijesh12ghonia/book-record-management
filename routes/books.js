const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById } = require("../controllers/book-controller");

const router = express.Router();

//Get all books
router.get('/', getAllBooks);

//Get a book by ID
router.get('/:id', getSingleBookById);

//Get all issued books
router.get('/issued/books', getAllIssuedBooks);

//Add a new book
router.post('/', addNewBook);

//Update a book details by ID
router.put('/:id', updateBookById);

module.exports = router;