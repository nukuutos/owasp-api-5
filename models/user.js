const getDb = require('../utils/database').getDb;

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.role = 'user';
    this.createdAt = new Date();
  }

  async save() {
    const db = getDb();
    await db.collection('users').insertOne(this);
  }

  static async findOne(query, projection = null) {
    const db = getDb();
    return await db.collection('users').findOne(query, { projection: projection });
  }
}

module.exports = User;
