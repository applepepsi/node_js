const express = require("express");
const app=express();
const home=require("./routes/home");
const PORT=3000;


app.set("views","./views");
app.set("view engine","ejs");


app.use("/",home);

app.listen(PORT,function()
{
    console.log("서버가동");
});