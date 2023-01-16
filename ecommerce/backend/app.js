const cookieParser = require('cookie-parser');
const express = require('express')
const app =express()
app.use(express.json())

app.use(cookieParser())
const errorMiddleware = require("./middleware/error");
//routes

const product=require('./routes/productroute')
const user= require('./routes/userroute')
const order=require('./routes/orderRoute')
app.use('/api/v1',product)
app.use('/api/v1',user)
app.use('/api/v1',order)
//middleware for error
app.use(errorMiddleware);


module.exports=app