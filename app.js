const express = require("express");
const path = require("path");  // Ensure path is included
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");  // Make sure this line is here

app.use(express.urlencoded({ extended: true }));

let articles = []; // Temporary storage

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

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
