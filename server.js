const express = require("express")
const bodyParser = require("body-parser");
const PeopleRoutes = require("./routes/people");

var app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use("/people",PeopleRoutes);


app.listen(3000);