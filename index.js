const express = require('express');
const fs = require('fs');
const app = express();
const cors = require("cors");

app.get("/", (req, res) =>{
    res.send("<h1>Welcom to the home page</h1>")
});

app.use(cors());
app.get("/quotes", (req, res) =>{
    res.setHeader("200",{"Content-Type" : "Application/json", "Access-Control-Allow-Credentials" :"true"});
    fs.readFile(`${__dirname}/quotes.json`, "utf-8", (err, data)=>{
    res.send(data);
    });
});

app.listen(8080);