const express = require("express");
const bodyParser = require("body-parser");
require('./config/mongoose')
const port = 3000;

const app = express();

/*Use to take input from  browser for your api's*/
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, (err) => {
  if (err) {
    console.log();
  } else {
    console.log(`Server is Running on PORT : ${port}`);
  }
});
