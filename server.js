const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const db = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', config);

// routes for different HTML pages
app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/exercise.html'));
});

app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/stats.html'));
});

// API routes
app.get('/api/workouts', (req, res) => {
  res.json(null);
});

app.put('/api/workouts/:id', (req, res) => {
  res.json(null);
});

app.post('/api/workouts', (req, res) => {
  res.json(null);
});


app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
