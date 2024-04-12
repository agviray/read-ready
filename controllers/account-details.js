const AccountDetail = require('../models/accountDetail');

module.exports = {
  index,
};

async function index(req, res) {
  const accountDetail = await AccountDetail.findOne({
    userGoogleId: req.user.googleId,
  });
  res.render('account-details/index', {
    title: 'Account Detail',
    accountDetail,
  });
}
