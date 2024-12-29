const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017';
const DB_NAME = 'formsDB';

app.use(cors());
app.use(bodyParser.json());

console.log(MONGO_URI)
let db;
MongoClient.connect(MONGO_URI, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(DB_NAME);
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.post('/forms', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email)) {
    return res.status(422).json({ error: 'Invalid email format' });
  }

  if (!password) {
    return res.status(422).json({ error: 'Password is required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const form = { firstName, lastName, email, password: hashedPassword };
    const result = await db.collection('forms').insertOne(form);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    console.error('Error creating form:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/forms', async (req, res) => {
  try {
    const forms = await db.collection('forms').find({}, { projection: { password: 0 } }).toArray();
    res.json(forms.map(({ _id, ...rest }) => ({ id: _id, ...rest })));
  } catch (err) {
    console.error('Error fetching forms:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use((req, res) => {
	res.status(404).json({ error: 'Not Found' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
