const express = require("express");
const db = require("../config/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


/* _______ ROUTES _______*/

// Route to GET all resources
app.get("/api/resources", (req, res) => {
    db.query("SELECT * FROM resources", (err, result) => {
        err ? console.error(err) : res.send(result);
    });
});

// Route to GET one resource
app.get("/api/resources/:id", (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM resources WHERE id = ?", id, (err, result) => {
        err ? console.error(err) : res.send(result);
    });
});

// Route to POST resource (Create)
app.post("/api/resources", (req, res) => {
    const name = req.body.name;
    const description = req.body.description;

    db.query("INSERT INTO resources (name, description) VALUES (?, ?)", [name, description], (err, result) => {
        err ? console.error(err) : console.log(result);
    });
});

// Route to PUT resource (Update)
app.put("/api/resources/:id", (req, res) => {
    const id = req.params.id;
    const description = req.params.description;

    db.query("UPDATE resources SET description = ? WHERE id = ?", [description, id], (err, result) => {
        err ? console.error(err) : console.log(result);
    });
});

// Route to DELETE resource
app.delete("/api/resources/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM posts WHERE id = ?", id, (err, result) => {
        err ? console.error(err) : console.log(result);
    });
});

module.exports = app;