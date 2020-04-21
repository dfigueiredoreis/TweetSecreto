const express = require('express');
const bodyparser = require('body-parser');
const encryption = require('./src/encryption.js');
const decryption = require('./src/decryption.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/encrypt', encryption.get);
app.get('/decryption', decryption.get);

app.listen(port, () => {
    console.log(`servidor de pé na porta  ${port}`);
})