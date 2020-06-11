const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("Course"); 

router.get("/add",(req,res)=>{
res.render("add-course");
});

router.post("/add",(req,res)=>{

    console.log(req.body);

var course = new CourseModel();
course.courseName = req.body.courseName;
course.courseDuration = req.body.courseDuration;
course.courseFee = req.body.courseFee;
course.courseId=Math.ceil(Math.random()*10000);
course.save((err, doc)=>{
if(!err)
{
    //console.log(docs);
    res.redirect("/course/list");
    //res.send("course controller")
}
else 
{
    res.send("error")
}
    //res.render("add-course");
});
});

router.get("/list", (req, res) => {


CourseModel.find((err,docs)=>{
if(!err)
{
    //console.log(docs);
    res.render("list", { data : docs} )
    //res.send("course controller")
}
else 
{
    res.send("error")
}
} );
});

module.exports = router;