const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,resp){

    resp.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/",function(req,resp){

    var weight=Number(req.body.weight);
    var height=Number(req.body.height);

    var result=(weight)/(height*height);
    resp.send("Thanks for using me! Your BMI is " + result );
});
app.listen(3000,function(){
    console.log("server is running");
});