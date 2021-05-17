const asyncHandler = require('../utils/async-handler');
const User = require('../models/user');

exports.getFile = asyncHandler(async (req, res, next) => {
  const { filename } = req.query;
  const { username, role } = req.user;

  // Some bustle
  eval(filename);

  console.log(username, role);

  let user;
  user = await User.findOne({ username, role }, { _id: 1 });

  if (user) {
    return res.json({ message: 'There is no files :) Just use google.com' });
  } else {
    return res.status(404).json({ message: 'You do not have access rights to our file system!' });
  }
});
