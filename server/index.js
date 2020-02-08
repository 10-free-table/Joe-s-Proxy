const express = require('express');
const path = require('path');

const server = express();
const port = 3000;

server.use(express.static(path.join(__dirname, '..', 'client', 'public')));
server.use('/:pageId', express.static(path.join(__dirname, '..', 'client', 'public')));

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
