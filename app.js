const express = require("express");
const noteRoutes = require("./routes/noteRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const app = express();

//middleware
app.use(express.json());

app.use(helmet());

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(morgan("dev"));

// create limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(limiter);

// Routes
app.use("/note", noteRoutes);

// Test Route
// app.get("/", (req, res) => {
//     res.send("Notes API is running!");
// });

// middleware err
app.use(errorHandler);

module.exports = app;