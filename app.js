const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));



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