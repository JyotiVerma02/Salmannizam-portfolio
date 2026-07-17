const { MongoClient } = require('mongodb');

async function check() {
  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('test'); // Or whatever the DB name is. Let's check the mongoose connection if possible. Wait, the uri is 'mongodb://127.0.0.1:27017/salmannizam-portfolio'
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
