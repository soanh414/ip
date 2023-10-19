var express = require("express");
var app = express();
var port = 3500;
var ip = require("ip");

app.get("/", function (req,res){
    var address = ip.address();
    res.send(address);
});

app.listen(port, () => {
    console.log("Running...............");
});// mui ten ngang hang voi function

