const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'pug');

app.get("/", (req, res) => {
  res.render('index', { title: 'Mekesia Brown' });
});

app.get("/affirm", (req, res) => {
  res.render('affirmations');
});

app.listen(process.env.PORT || 3001, () => {
  console.log("===Server running on port 3001===");
});