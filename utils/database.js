const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const { DB_CLUSTER, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}`;

let _db;
const mongoConnect = async (callback) => {
  try {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Connected!');
    _db = client.db();
    callback();
  } catch (err) {
    console.log(err);
    process.exit(1); // Exit process with failure
  }
};

const getDb = () => {
  if (_db) return _db;
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
