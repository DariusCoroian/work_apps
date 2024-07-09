const express = require('express')
const {connection} = require('./db')
const app = express();
const PORT = 5000;
app.use(express.json());

connection();
app.listen(
    PORT,
    () =>console.log(`Listening to http://localhost:${PORT}`)
)
