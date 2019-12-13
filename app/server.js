var express = require("express");
var helmet = require("helmet");
var fetch = require("node-fetch");
var app = express();
var port = process.env.PORT || 8080;
var cors = require("cors");

app.use(helmet());
app.use(cors());
app.listen(port);

// routes will go here
app.get("/bil/:nummer", function(req, res) {
  if (req.params.nummer) {
    fetch(
      `https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/kjoretoyoppslag/v1/kjennemerkeoppslag/kjoretoy/${req.params.nummer}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => console.log(err));
  }
});
