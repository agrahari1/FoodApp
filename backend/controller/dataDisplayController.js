const dataController = async (req, res) => {
  try {
    // Wrap the data in an object
    //res.send(global.food_category, global.food_items);
    res.send({
      food_category: global.food_category,
      food_items: global.food_items,
    });
  } catch (error) {
    // Log the error and send a response to the client
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  dataController,
};

// const dataController = async (req, res) => {
//   try {
//     res.send(global.food_category, global.food_items);

//     //console.log(global.food_items);
//   } catch (error) {}
// };
// module.exports = {
//   dataController,
// };
