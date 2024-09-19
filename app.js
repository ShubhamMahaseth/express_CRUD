const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => res.json({ hello: "hi" }));

app.listen(3000, (res) => console.log(`Port listening at ${process.env.PORT}`));
