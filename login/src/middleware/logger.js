const config = require('../config');

module.exports = () => {
    return (req, res, next) => {
        if (config.ENV === 'test') return next();

        const send = res.send.bind(res);
        const start = Date.now();
        const reqDate = new Date(start).toLocaleString();
        console.log(`[Request  ${req.path}]`, `[${reqDate}]`, req.method, req.body);

        res.send = (value) => {
            const end = Date.now();
            const resDate = new Date(end).toLocaleString();
            const completionTime = end - start;
            console.log(`[Response ${req.path}]`, `[${resDate}] ${completionTime} ms`, value);
            send(value);
        };

        return next();
    }
};
