/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import express from 'express';
import helmet from 'helmet';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

// Set allowed URL for CORS
const corsOptions = {
  origin: ['https://vegvesen.dfweb.no', 'http://localhost:1234'],
};

app.use(helmet());
app.use(cors(corsOptions));
app.listen(port);

app.get('/bil/:nummer', (req, res, next) => {
  const urlToFetch = `https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/kjoretoyoppslag/v1/kjennemerkeoppslag/kjoretoy/${req.params.nummer}`;
  if (req.params.nummer) {
    fetch(urlToFetch)
      .then((response) => response.json())
      .then((data) => {
        res.send(data);
        next();
      })
      .catch(() => {
        throw new Error('Error');
      });
  }
});
