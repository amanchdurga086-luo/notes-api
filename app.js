const express = require("express");
const noteRoutes = require("./routes/noteRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

//middleware
app.use(express.json());

// Routes
app.use("/notes", noteRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Notes API is running!");
});

// middleware err
app.use(errorHandler);

module.exports = app;