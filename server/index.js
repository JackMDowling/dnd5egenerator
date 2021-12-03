const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(5151, console.log('Connected to the 5e Generator!'));
