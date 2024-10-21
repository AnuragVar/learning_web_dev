if(process.env.NODE_ENV!== 'production'){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
//to use ejs as a view engine
app.set("views", __dirname + "/views");
//__dirname with pull out the directory name

app.set("layout", "layouts/layout");
//every single file will be put into this layout file

app.use(expressLayouts);
app.use(express.static("public"));
app.listen(process.env.PORT || 3000);
const indexRouter = require('./routes/index');

app.use('/',indexRouter);
// if it routes as / indexRouter will take care of it

// 3000 for developement, env variable bcs it depends on the environment where we are running our project

//bcs of large project we will use MVC


const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
//to log the connection is held or not
db.on('error',error=>console.error(error));
db.once('open',()=>console.log('Connected to mongoose'));