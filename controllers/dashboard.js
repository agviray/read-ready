const User = require('../models/user');
const LibraryBook = require('../models/libraryBook');

module.exports = {
  index,
  addToMyBooks,
};

function index(req, res) {
  res.render('dashboard/index', { title: 'Dashboard' });
}

async function addToMyBooks(req, res) {
  const user = await User.findById(req.user._id);
  const book = await LibraryBook.findById(req.params.id);

  user.myBooks.push(book);

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect('/dashboard');
}
