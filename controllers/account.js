module.exports = {
  index,
};

function index(req, res) {
  res.render('account/index', { title: 'Account' });
}
