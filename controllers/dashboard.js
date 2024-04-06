module.exports = {
  index,
};

function index(req, res) {
  res.render('dashboard/index', { title: 'Dashboard' });
}
