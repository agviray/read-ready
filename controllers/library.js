const LibraryBook = require('../models/libraryBook');

module.exports = {
  index,
};

async function index(req, res) {
  const libraryBooks = await LibraryBook.find({});
  console.log(libraryBooks);
  res.render('library/index', { title: 'Library', libraryBooks });
}
