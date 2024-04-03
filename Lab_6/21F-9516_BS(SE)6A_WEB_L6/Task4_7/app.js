const dbconnect = require("./mongodb");
//getdata();
const view = async () => {
  let data = await dbconnect();
  data = await data
    .find({
      price: {
        $gt: 100,
        $lt: 500,
      },
    })
    .toArray();

  console.warn(data);
};
view();
