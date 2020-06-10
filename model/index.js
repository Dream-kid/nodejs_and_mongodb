const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/sourav", { useNewUrlParser: true,  useUnifiedTopology: true }, (error)=>{
if(!error)
{
console.log("Success Connected");
}
else
{
console.log("Error connecting to database.");
}

});

const Course = require("./course.model");