const User = require('../models/user');
const LibraryBook = require('../models/libraryBook');

module.exports = {
  index,
  addToMyBooks,
  removeFromMyBooks,
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

async function removeFromMyBooks(req, res) {
  // const user = await User.findById(req.user._id);
  // const book = await LibraryBook.findById(req.params.id);
  // const bookId = book._id;
  // const userId = user._id;
  const user = await User.findById(req.user._id);
  const book = await LibraryBook.findById(req.params.id);
  const myBooks = user.myBooks;
  const userId = user._id;
  const bookId = book._id.toString();
  // const userId = req.user._id;
  // const bookId = req.params.id;
  console.log(myBooks);

  const newMyBooks = myBooks.filter((book) => {
    if (book._id.toString() !== bookId) {
      return book;
    }
  });

  user.myBooks = [...newMyBooks];

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  res.redirect('/dashboard');
}
