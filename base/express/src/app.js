const express = require('express');

const app = express();

app.use(express.text());
app.use(express.json());
app.set('PORT', 8080);

app.get('/', (req, res) => res.status(200).send('Hello world'));

app.get('/john', (req, res) => {
  const { query } = req;

  // console.log(query);

  const queryToString = Object.entries(query)
    .map(([key, value]) => `${key}:${value}`)
    .join(' & ');

  res.status(200).send(`Hello john ${queryToString}`);
});

app.get('/john/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).send(`Hello john ${id}`);
});

app.post('/john', (req, res) => {
  const { body } = req;

  // console.log(query);

  const bodyToString = Object.entries(body)
    .map(([key, value]) => `${key}:${value}`)
    .join(' & ');

  res.status(200).send(`Hello john ${bodyToString}`);
});

module.exports = app;
