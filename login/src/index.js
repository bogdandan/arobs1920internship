const http = require('http');
const app = require('./app');

http.createServer(app).listen(app.get('PORT'), (err) => {
    if (err) {
        console.error(' Could not serve on port ', app.get('PORT'));
    }
    console.log(' App listens on port ', app.get('PORT'));
});
