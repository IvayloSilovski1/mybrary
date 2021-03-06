const express = require('express');
const router = express.Router();
const Book = require('../modules/book');

router.get('/', async (req, res) => {
  let books
  try {
    books = await Book.find().sort({
      createdAt: 'desc'
    }).limit(10).exec()
  } catch(e) {
    if (e) console.log(e);
    books = []
  }
  res.render('index', {
    books: books
  })
})

module.exports = router