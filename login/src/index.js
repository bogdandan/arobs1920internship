const http = require('http');
const app = require('./app');

const port = app.get('PORT');

http.createServer(app).listen(port, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error('Could not start the server on', port);
  } else {
    // eslint-disable-next-line no-console
    console.log('Server is up and running on', port);
  }
});
