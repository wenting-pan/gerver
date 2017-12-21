const express = require("express");
const app = express();

// Checks if requested file is in the public folder
app.use(express.static("public"));

// Handle requests for files not in public folder
app.get("/", function(req, res) {
    res.send("Hello World!")
});

app.get("/asdf", function(req, res) {
    res.send("You have left the landing page. Woooooo..")
});

app.listen(8000, function() {
    console.log("Everything is good in the hood.");
});