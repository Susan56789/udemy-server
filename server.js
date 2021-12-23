const express = require('express');
//import express from 'express';

const bodyParser = require('body-parser');
//import bodyParser from 'body-parser';

const pino = require('express-pino-logger')();
//import pino from 'express-pino-logger';

//const courses =require('./courses');
//import courses from './courses'
//import *  as courses from './courses';

var PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.static(path.join(__dirname,"../dist/Uwezo-Academy/browser"));




const cors =require("cors");
//import cors from 'cors';

var corsOptions={
    origin:["http://localhost:4200", "http://localhost:4000","http://localhost:8000", "**"],
    credentials:"include"

}

app.use(cors(corsOptions));

//REST API Call
app.get("/",async (req, res)=>{
res.send("Hello Node,js ! Change the authorization header in the courses&reviews. Put in your Authorization token from udemy affiliate api-2.0 ");
});

//Get all courses
const courses= require("./courses");

app.get("/courses", async(req,res)=>{
    console.log(courses);
      let result =  await courses (req.headers);
     res.send(result);
    });
	

//Get all reviews
const reviews= require("./reviews");

app.get("/reviews", async(req,res)=>{
    console.log(reviews);
      let result =  await reviews (req.headers);
     res.send(result);
    });


    app.listen(PORT, () =>{
   console.log(`Server is started and listening on port: ${PORT}`)
})

