const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.set('view engine', 'pug');

app.get("/", (req, res) => {
  res.render('index', { title: 'Mekesia Brown', message: 'Hello there!' });
});

app.get("/affirm", (req, res) => {
  res.render('affirmations');
});

app.listen(process.env.PORT || 3001, () => {
  console.log("===Server running on port 3001===");
});