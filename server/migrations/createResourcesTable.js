const db = require("../config/db");
const app = require("../api/resources");

app.get("/", (req, res) => {
    const tableName = "resources";
    const query = `
        CREATE TABLE ${tableName} (
            id              INT AUTO_INCREMENT PRIMARY KEY,
            name            VARCHAR(255),
            description     VARCHAR(255)
        )
    `;

    db.query(query, (err, rows) => {
        if (err) {
            return res.status(500).send("Table creation failed");
        }

        return res.send(`Successfully created table - ${tableName}`)
    });
});