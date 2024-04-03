const { MongoClient } = require("mongodb");
//const atlasConnectionurl =
//"mongodb+srv://saqib123:abc@123@clustor0.mongodb.net/e-comm?retryWrites=true&w=majority";
const url = "mongodb://0.0.0.0:27017";

const database = "e-comm";
const client = new MongoClient(url);

async function dbconnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
  //let response = await collection.find({}).toArray();
  //console.log(response);
}
module.exports = dbconnect;
