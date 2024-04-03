const dbconnect = require("./mongodb");

const deletedata = async () => {
  let data = await dbconnect();
  let result = await data.deleteOne({
    name: "max-pro-5",
  });
  console.warn(result);
};
deletedata();
