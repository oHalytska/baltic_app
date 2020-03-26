const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views views');

app.get('/', (req, res) => res.render('index'));

app.post('/', function(req, res) {
  const country = req.body.countries;
  const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true.json`;

  axios
    .get(url)
    .then(function(response) {
      console.log(country);
      const capital = response.data.bpi[country];
      console.log(capital);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log('Server is running on Port 3000');
});
