const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./api/routes/student');
const facultyRoute = require('./api/routes/faculty');
const userRoute = require('./api/routes/user');
const app = express();

const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

mongoose.connect('mongodb+srv://new-user:123@cluster0.49im1lf.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error', error=>{
    console.log('Connection Failed..')
});

mongoose.connection.on('connected',connected=>{
    console.log('Connected with Database')
});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/student', studentRoute);
app.use('/faculty',facultyRoute);
app.use('/user',userRoute);


app.use((req,res,next)=>{
    res.status(404).json({
        error : 'url not found'
    })
});

module.exports = app;