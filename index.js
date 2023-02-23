const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
const router = require("./routes/user_router");

const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser()); 
app.use(express.json());
app.use('/',router)

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/test")
.then(() => {console.log("Mongodb connection Success!");});




PORT = process.env.PORT ||9000;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
