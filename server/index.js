const app = require("./api/resources");

const PORT = 3001;

/* _______ Server _______*/
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});