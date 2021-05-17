const express = require('express');
const cors = require('cors');

const { mongoConnect } = require('./utils/database');

const fileRoutes = require('./routes/file');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));

app.use(express.json());

app.use('/', (req, res, next) => {
  console.log('--- REQUEST ---');
  console.log(req.method, req.url);
  next();
});

app.use('/api/v1/file', fileRoutes);
app.use('/api/v1/auth', authRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error); // if res has already sent
  const { message, statusCode } = error;

  console.error(message, error);

  res.status(statusCode || 500).json({ message: message || 'Server error occured. Please try again.' });
});

mongoConnect(() => app.listen(process.env.PORT || 5000));
