const express=require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser =require("body-parser");
multer = require('multer');
const path = require('path');
const passport = require('passport');


app.use('/',(req,res)=>{
  res.json({message:"Test successful"});
})
app.listen(8080);