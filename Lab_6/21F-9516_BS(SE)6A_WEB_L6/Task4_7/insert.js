const dbconnect = require("./mongodb");

const insert = async () => {
  const db = await dbconnect();
  const result = await db.insertMany([
    { name: "abcf", brand: "samsung", price: 320, category: "mobile" },
    { name: "note6", brand: "vivo", price: 420, category: "mobiles" },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};
insert();
