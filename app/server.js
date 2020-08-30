var express = require('express');
var helmet = require('helmet');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 8080;
var cors = require('cors');

// Set allowed URL for CORS
const corsOptions = {
  origin: ['https://vegvesen.dfweb.no', 'http://localhost:1234'],
};

app.use(helmet());
app.use(cors(corsOptions));
app.listen(port);

app.get('/bil/:nummer', function (req, res) {
  if (req.params.nummer) {
    fetch(
      `https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/kjoretoyoppslag/v1/kjennemerkeoppslag/kjoretoy/${req.params.nummer}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.log(err));
  }
});
