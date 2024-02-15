require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { databaseService } = require('./services/databaseService');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());



require('./routes')(app, databaseService());



app.listen(port, () => {
    console.log('Server is running on port 3000');
    });