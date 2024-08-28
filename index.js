const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs');

let subscribedPeople = []

app.get('/', (req, res) => {
  res.render('index', { test: '', subscribedPeople })
});

app.post('/receive', (req, res) => {
  const received = req.body.name;
  subscribedPeople.push(received)
  res.render('index', {
    subscribedPeople,
    test: ''
  })
})
const port = 3001;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
})