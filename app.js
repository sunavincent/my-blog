const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));



app.get("/test-css", (req, res) => {
    const filePath = __dirname + "/public/style.css";
    console.log("Serving file from:", filePath);
    res.sendFile(filePath);
});

let articles = []; // Stockage temporaire

app.get("/", (req, res) => {
    res.render("home", { articles });
});

app.get("/add", (req, res) => {
    res.render("add");
});

app.post("/add", (req, res) => {
    const { title, content } = req.body;
    articles.push({ title, content });
    res.redirect("/");
});

app.listen(port, () => console.log(`Serveur lancé sur http://localhost:${port}`));