import http from 'http';
import express from 'express';

const app = express();
app.set('PORT', 8080);

app.use(express.json());
app.use(express.text());

app.get('/', (req, res, next) => {
    console.log('this is a middleware ', JSON.stringify(req.query));
    next();
}, (req, res) => {
    res.status(200).send(`get index route ${JSON.stringify(req.query)}`);
});

app.get('/:id', (req, res) => {
    res.status(200).send(`get index route ${req.params.id}`);
});

app.post('/', (req, res) => {
    res.status(200).send(`post index route ${JSON.stringify(req.body)}`);
});

app.post('/:id', (req, res) => {
    res.status(200).send(`post index route ${req.params.id} ${JSON.stringify(req.body)}`);
});

app.put('/', (req, res) => {
    res.status(200).send(`put index route ${JSON.stringify(req.body)}`);
});

app.put('/:id', (req, res) => {
    res.status(200).send(`put index route ${req.params.id} ${JSON.stringify(req.body)}`);
});

http.createServer(app).listen(app.get('PORT'), () => {
    console.log('app listens on port ', app.get('PORT'));
});
