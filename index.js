const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");
const CourseController = require("./controllers/courses")
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access') 
application.use(bodyparser.urlencoded({
extended: true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlerbars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir  :__dirname + "/views/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)

    }));

    application.set("view engine", "hbs");

application.get("/", (req,res)=>{
//res.send('<h1>Hello World 123 </h1>');
res.render("index", {});
});
application.use("/course", CourseController);


application.listen("3000",()=>{
   console.log("Server Started");
    })