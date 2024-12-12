import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1><p>Hello John. You are doing fine now.</p>")
});

app.get("/about", (req, res) => {
    res.send("<h3>Part two of Node Express</h3>");
});

app.get("/contact", (req, res) => {
    res.send("<ul><li>Email</li><li>Name</li></ul>");
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});