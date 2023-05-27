const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

const router = express.Router();

//Get all books
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: books
    });
});

//Get a book by ID
router.get('/:id', (req, res) => {
    const { id } = req.params
    const book = books.find((each) => each.id === id);
    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }
    res.status(200).json({
        success: true,
        data: book
    })
});

//Get all issued books
router.get('/issued/books', (req, res) => {
    const userWithIssuedBooks = users.filter((each) => {
        if (each.issuedBook) {
            return each
        }
    });

    const issuedBooks = [];

    userWithIssuedBooks.forEach((each) => {
        const book = books.find((book) => book.id === each.issuedBook);

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);
    });

    if (issuedBooks.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No books were issued"
        })
    }

    res.status(200).json({
        success: true,
        data: issuedBooks
    })
});

module.exports = router;