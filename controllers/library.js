const LibraryBook = require('../models/libraryBook');

module.exports = {
  index,
  show,
};

async function index(req, res) {
  const libraryBooks = await LibraryBook.find({});
  res.render('library/index', { title: 'Library', libraryBooks });
}

async function show(req, res) {
  const book = await LibraryBook.findById(req.params.id);
  res.render('library/show', { title: 'Book Details', book });
}
