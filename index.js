const express = require("express");
const bodyParser = require("body-parser");
require('./models/index')
const userController = require('./controllers/user.controller')
const practiceController = require('./controllers/Practice.controller')
const finderController = require('./controllers/finder.controller');
// require('./config/mongoose')
// const User = require("./models/user.model");
// const Contact = require('./models/contact.model')


const port = 3001;

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



app.delete("/deleteUser/:id",userController.deleteUser)
// User.sync({ force: true });
// // User.sync();
// Contact.sync({force:true})




/*Practices */
/*API for find all user with attributes */

app.get("/findAllUser",practiceController.findAllUser);

/*Finders */

// app.get('/', finderController.finders)



app.use('/', require('./routes'));

app.listen(port, (err) => {
  if (err) {
    console.log();
  } else {
    console.log(`Server is Running on PORT : ${port}`);
  }
});
