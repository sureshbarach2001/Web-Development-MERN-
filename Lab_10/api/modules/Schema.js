//Require mongoose
const mongoose = require("mongoose");

//Create schema contains a single field named 'name.'
//The 'name' field is of type String
const InfoSchema = new mongoose.Schema(
  { username: String },
  { email: String },
  { password: String },
  { marks: Number },
  { rollno: String }
);

//Export the Mongoose model with the collection name "Todo"
module.exports = mongoose.model("Info", InfoSchema);
