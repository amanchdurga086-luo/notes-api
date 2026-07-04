const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Notes API is running!");
});

module.exports = app;