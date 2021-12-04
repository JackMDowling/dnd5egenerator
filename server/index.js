const express = require('express');
const path = require('path');
const mongo = require('./database.js')

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/characters', (req, res) => {
    const data = req.body
    mongo.saveCharacter(data)
})

app.get('/characters', async (req, res) => {
    const data = await mongo.getRandomSaved()
    console.log('data here ', data)
    res.send(data)
})

app.listen(process.env.PORT || 5151, console.log('Connected to the 5e Generator!'));

// if process.env.NODE_ENV === production/deployment
// node environment variables
