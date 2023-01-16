
const mongoose = require("mongoose");

const URL='mongodb+srv://PRIT:prit@cluster0.x84f1oy.mongodb.net/ecommercedb?retryWrites=true&w=majority'
const connectDatabase = () => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};



module.exports = connectDatabase;