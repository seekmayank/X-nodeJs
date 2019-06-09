console.log("helloee");

const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

let app = express();

let logger = function(req, res, next) {
  console.log("Logging...");
  next();
};

app.use(logger);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set staic Path
app.use(express.static(path.join(__dirname, "public")));

var users = [
  {
    id: 1,
    firstName: "Mayank",
    lastName: "Gupta"
  },
  {
    id: 2,
    firstName: "Seema",
    lastName: "Gupta"
  }
];

app.get("/", function(req, res) {
  //res.json(person)
  //res.send('Hello')
  //res.render('index')
  res.render("index", {
    title: "Customer",
    users: users
  });
});

app.post("/users/add", function(req, res) {
  console.log("Form Submitted");
  console.log(req.body.firstName);
  console.log(req.body.lastName);
});

app.listen(3000, function() {
  console.log("Sever started on port 3000...");
});
