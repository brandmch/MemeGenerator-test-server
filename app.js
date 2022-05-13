const express = require("express");
const app = express();

const PORT = 4000

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`));