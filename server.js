const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: './build'
  });
});

server.listen(4010, () => {
  console.log('Running at http://localhost:4010');
});
