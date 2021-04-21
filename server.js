const express = require("express");
const app = express();

app.listen(8000, function () {
  console.log("Server is running");
});

const mockUserData = [{ name: "Mayank" }, { name: "Dutta" }];
app.get("/users", function (req, res) {
  req.json({
    success: true,
    message: "successful !!",
    users: mockUserData,
  });
});
