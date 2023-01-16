const app =require('./app.js')
const dotenv=require("dotenv")
const connectDatabase = require("./config/database");


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


//congif
dotenv.config()

// Connecting to database
connectDatabase();

app.listen(9000,()=>{
    console.log("server is working")
})


process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });///for mongodb error of env variable
//http://localhost:9000/api/v1/products

//bcrypt for hashing password
//validator for email validating
//nodemailier fro sending resetpassord links
//cookie parser  to store token