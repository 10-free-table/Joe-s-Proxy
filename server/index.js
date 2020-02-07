const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const axios = require('axios');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/', (req, res) => {
  axios.get('http://localhost:3001/reservation')
    .then(response => {
      res.send(response.data);
    }).catch(error => {
      console.log(error);
    });
});

app.get('/:pagenum', (req, res) => {
  axios.get('http://localhost:3002/' + req.params.pagenum)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/', (req, res) => {
  axios.get('http://localhost:3003')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});