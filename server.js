const express = require('express');
const bodyparser = require('body-parser');
const encryption = require('./src/encryption.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//app.get('/encrypt', encryption.get) {
//   console.log(req.query.text);
// Url = req.protocol + '://' + req.get('host') + req.originalUrl;
//console.log(Url);
//req.query.text;
//res.send(encryption.get);
//};

app.get('/encrypt', encryption.get);

app.listen(port, () => {
    console.log(`servidor de pé na porta  ${port}`);
})