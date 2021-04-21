const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const mockUserData = [{ name: "Mayank" }, { name: "Dutta" }];

app.pos("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const name = "mayank";
  const pass = "12345";

  if (username === name && pass == password) {
    res.json({
      success: true,
      message: "password and name matched",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "chalaja yaha se",
    });
  }
});

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successful !!",
    users: mockUserData,
  });
});

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

app.listen(8000, function () {
  console.log("Server is running");
});
