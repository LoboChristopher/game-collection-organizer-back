const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

console.log("Waiting Server to Run");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require("./app/controllers/index")(app);

app.listen(8080);
console.log("Server is Running");
