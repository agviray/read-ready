module.exports = {
  index,
};

function index(req, res) {
  res.render('library/index', { title: 'Library' });
}
