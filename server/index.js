const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res)=>{
    res.send("server is running");
})


app.listen(3000, console.log("server is running"));