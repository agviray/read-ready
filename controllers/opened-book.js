module.exports = {
  index,
};

function index(req, res) {
  res.render('opened-book/index', { title: 'Opened Book' });
}
