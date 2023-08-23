const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js")
const app = express();

mongoose.connect("mongodb://127.0.0.1/todolist");
const listSchema = {
    name: String
};

app.use(bodyparser.urlencoded({ extented: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("home");
});

const Basicitems = mongoose.model("Item", listSchema);
const Workitems = mongoose.model("WorkItem", listSchema);
const Movieitems = mongoose.model("MovieItem", listSchema);
const Subjectitems = mongoose.model("SubjectItem", listSchema);


app.get("/today", function (req, res) {
    day = date.getDate();
    async function getbasicitems() {
        const allitems = await Basicitems.find({});
            res.render("list", {
                listTitle: day,
                items: allitems
            });
        }
    getbasicitems();
});

// app.get("/:newlist",function(req,res){
//     const newtitle= req.body.newlist + " list";
//      const newmodel  = mongoose.model("Item", listSchema); 
//     async function getitems() {
//         const allitems = await newmodel.find({});
//         res.render("list",{
//             listTitle: newtitle,
//             items: allitems
//         });
//     }
//     getitems();
// });

app.get("/work", function (req, res) {
    async function getitems() {
                const allitems = await Workitems.find({});
                res.render("list", {
                    listTitle: "Work List",
                    items: allitems
                });;
            }
            getitems();
});

app.get("/movie", function (req, res) {
    async function getitems() {
        const allitems = await Movieitems.find({});
        res.render("list", {
            listTitle: "Movies List",
            items: allitems
        });;
    }
    getitems();
});

app.get("/subject", function (req, res) {

    async function getitems() {
        const allitems = await Subjectitems.find({});
        res.render("list", {
            listTitle: "Subjects List",
            items: allitems
        });;
    }
    getitems();
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/", function (req, res) {
    let data = req.body.todoinput;
    console.log(req.body);
    if (req.body.btn === "Work") {
        const newitem = new Workitems({
            name: data
        });
        newitem.save();
        res.redirect("/work");
    }
    else if (req.body.btn === "Movies") {
        const newitem = new Movieitems({
            name: data
        });
        newitem.save();
        res.redirect("/movie");
    }
    else if (req.body.btn === "Subjects") {
        const newitem = new Subjectitems({
            name: data
        });
        newitem.save();
        res.redirect("/subject");
    }
    else {
        const newitem = new Basicitems({
            name: data
        });
        newitem.save();
        res.redirect("/today");
    }
});

app.post("/delete", function (req, res) {
    console.log(req.body.todelete[1]);
    const data = req.body;
    const values = data.todelete.split(',');
    const delid = values[0].trim();
    const pagename = values[1].trim();
    console.log(pagename);
    
    if (pagename === "Work List") {
        async function todelete() {
            await Workitems.findByIdAndRemove({ _id: delid });
        }
        todelete();
        res.redirect("/work");
    }
    else if (pagename === "Movies List") {
        async function todelete() {
            await Movieitems.findByIdAndRemove({ _id: delid });
        }
        todelete();
        res.redirect("/movie");
    }
    else if (pagename === "Subjects List") {
        async function todelete() {
            await Subjectitems.findByIdAndRemove({ _id: delid });
        }
        todelete();
        res.redirect("/subject");
    }
    else {
        async function todelete() {
            await Basicitems.findByIdAndRemove({ _id: delid });
        }
        todelete();
        res.redirect("/today");
    }
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})
