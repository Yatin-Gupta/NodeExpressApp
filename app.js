const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//const urlEncodedParser = bodyParser.urlencoded({ extended: false });

// specifying middlewares
app.use(express.urlencoded({ extended: true }));

// specify view engine
app.set("view engine", "ejs");

// fetch controllers
let userController = require('./controllers/UserController');

// calling controllers
userController(app);

app.listen(3000);

console.log("Application is listening at port: 3000");