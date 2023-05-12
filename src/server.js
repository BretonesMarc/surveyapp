const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/users');
const surveyRoutes = require('./routes/surveys');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB...', err));

app.use(express.json()); // to parse JSON bodies
app.use('/users', userRoutes);
app.use('/surveys', surveyRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`)
});