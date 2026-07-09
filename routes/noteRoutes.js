const express = require("express");

const router = express.Router();

const {
     createNote,
    getAllNotes,

 } = require("../controllers/noteController");

router.post("/", createNote);

router.get("/", getAllNotes);

module.exports = router;