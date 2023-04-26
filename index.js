const express = require("express");
const bodyParser = require("body-parser");
require('./models/index')
// require('./config/mongoose')
// const User = require("./models/user.model");
// const Contact = require('./models/contact.model')


const port = 3000;

const app = express();

/*Use to take input from  browser for your api's*/
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

// User.sync({ force: true });
// // User.sync();
// Contact.sync({force:true})
app.listen(port, (err) => {
  if (err) {
    console.log();
  } else {
    console.log(`Server is Running on PORT : ${port}`);
  }
});
