const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config({ encoding: 'latin1' });
const app = express();
const BeaufsRoutes = require('./routes/beauf')
const GaeRoutes = require('./routes/gae')

mongoose.connect(process.env.MONGOOSE_KEY,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(function () {
        console.log("Connected")
    })
    .catch(function () {
        console.log("Erreur")
    });
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use('/api/beaufs', BeaufsRoutes);
app.use('/api/isitgae', GaeRoutes);



module.exports = app;