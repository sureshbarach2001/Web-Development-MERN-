import config from "config";
import { MongoClient } from "mongodb";

const url = config.get("dbURI");
const client = new MongoClient(url);
let conn;
let db;

try {
    conn = await client.connect();
    console.log("Connected to MongoDB");
} catch (err) {
    console.error(`Failed to connect to the database: ${err}`);
}
db = conn.db("sample_airbnb");
export default db;