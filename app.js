const express = require("express");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

//middleware
app.use(express.json());

// Routes
app.use("/notes", noteRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Notes API is running!");
});

module.exports = app;