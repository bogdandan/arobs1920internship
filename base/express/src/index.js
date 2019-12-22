import http from 'http';
import app from './app.js';

const listenCallback = (e) => {
    if (e) {
        console.error('Could not start the server ', app.get('PORT'), e)
    } else {
        console.log('app listens on port ', app.get('PORT'));
    }
};

http
    .createServer(app)
    .listen(app.get('PORT'), listenCallback);
