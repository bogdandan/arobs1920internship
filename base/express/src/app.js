import express from 'express';

const initMiddleWares = (app) => {
    app.use(express.json());
    app.use(express.text());
};

const initRoutes = (app) => {
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
};

export default (() => {
    const app = express();
    app.set('PORT', 8080);

    initMiddleWares(app);
    initRoutes(app);

    return app;
})();
