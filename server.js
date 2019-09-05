const express = require('express');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());

app.use(cookieParser());

require('./server/routes')(app);

app.listen(8000, () => console.log("listening on port 8000"));

