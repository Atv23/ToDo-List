const express = require("express");
const bodyparser = require("body-parser");
const date= require(__dirname+"/date.js")
const app= express();

const basicitems=[];
const workitems=[];
const movieitems=[];
const subjectitems=[];

app.use(bodyparser.urlencoded({extented:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("home");
});
app.get("/today",function(req,res){
    
    day= date.getDate();

    res.render("list",{
        listTitle: day,
        items: basicitems
    });
});
app.get("/work",function(req,res){
    
    res.render("list",{
        listTitle: "Work List",
        items: workitems
    });
});
app.get("/movie",function(req,res){
    
    res.render("list",{
        listTitle: "Movies List",
        items: movieitems
    });
});
app.get("/subject",function(req,res){
    
    res.render("list",{
        listTitle: "Subjects List",
        items: subjectitems
    });
});
app.get("/about",function(req,res){
    res.render("about");
});
app.post("/",function(req,res){
    let data= req.body.todoinput;
    console.log(req.body);
    if(req.body.btn==="Work")
    {
        workitems.push(data);
        res.redirect("/work");
    }
    else if(req.body.btn==="Movies"){
        movieitems.push(data);
        res.redirect("/movie");
    }
    else if(req.body.btn==="Subjects"){
        subjectitems.push(data);
        res.redirect("/subject");
    }
    else{
        basicitems.push(data);
        res.redirect("/today");
    } 
});


app.listen(3000,function(){
    console.log("Server is running on port 3000");
}) 

// document.querySelector(".delbtn").addEventListener("click",function(){
//         var str= a.innerHTML;
//       var idx= inp.indexOf(str);
//       delete inp[idx];  
//     })