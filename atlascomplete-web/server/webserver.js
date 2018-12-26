const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mockConfig = require('../../atlas-service-tools').mock.config;

// first set path to mock files
mockConfig.baseFolder = path.resolve(__dirname, '../mocks/') + '/';

app.use(bodyParser.json());

require('./mock-service')(app);

app.listen(4201, () => console.log(`Mock server listens on 4201 port!`));
