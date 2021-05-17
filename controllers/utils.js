const { sign } = require('jsonwebtoken');

const createAccessToken = (user) => {
  const { username, role } = user;

  const payload = {
    user: {
      username,
      role,
    },
  };

  return sign(payload, process.env.JWT_KEY_ACCESS, { expiresIn: process.env.JWT_KEY_ACCESS_TIME });
};

exports.sendTokenResponse = (user, res) => {
  const accessToken = createAccessToken(user);

  const options = {
    maxAge: process.env.JWT_KEY_ACCESS_TIME,
    path: '/',
    sameSite: true,
  };

  return res.cookie('accessToken', accessToken, options);
};
