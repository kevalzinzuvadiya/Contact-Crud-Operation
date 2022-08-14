const express = require('express');
const path = require('path');
require('dotenv').config()

const freshSalesRoute = require('./routes/freshsales.route')

const app = express();
app.use(express.json());

app.use('/freshsales', freshSalesRoute);

app.get('/', (req, res, next) => {
    res.send("Welcome to CRUD App");
})


app.listen(8000, () => {
    console.log("Node connected successfully at port 8000", "http://localhost:8000");
});