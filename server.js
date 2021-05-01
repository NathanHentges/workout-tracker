const express = require('express');
const mongoose = require('mongoose');

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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populate', config);


app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
