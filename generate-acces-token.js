const { sign } = require('jsonwebtoken');

const createAccessToken = (user) => {
  const { username, role } = user;

  const payload = {
    user: {
      username,
      role,
    },
  };

  return sign(payload, 'thisisajwtkeyforaccesstokengoodluckguys', { expiresIn: '20h' });
};

const token = createAccessToken({ username: 'username', role: 'admin' });
console.log(token);
