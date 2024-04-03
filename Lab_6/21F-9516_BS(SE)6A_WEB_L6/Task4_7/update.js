const dbconnect = require("./mongodb");

const updatedata = async () => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: "note6" },
    {
      $set: { name: "max-pro-5" },
    }
  );
  console.warn(result);
};
updatedata();
