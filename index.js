const express = require("express");
const bodyParser = require("body-parser");
require('./models/index')
const userController = require('./controllers/user.controller')

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

/*API for get user  */
app.get("/getUsers", userController.getUser);

/*API for get user  */
app.post("/createUSer", userController.createUser);

/*API for getUserById  */
app.get("/getUserById/:id", userController.getUserById);
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
