const express = require('express');
const appServer = express();
const port = 999;
appServer.get('/', (req, res) => res.send('Hello World'));
appServer.listen(port, () => console.log('Ok ${port}'));
