const LibraryBook = require('../models/libraryBook');

module.exports = {
  index,
  show,
};

function index(req, res) {
  res.render('opened-book/index', { title: 'Opened Book' });
}

async function show(req, res) {
  const book = await LibraryBook.findById(req.params.id);

  res.render('opened-book/show', { title: book.title, book });
}
