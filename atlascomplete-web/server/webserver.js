const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./mock-service')(app);

app.listen(4201, () => console.log(`Mock server listens on 4201 port!`));
