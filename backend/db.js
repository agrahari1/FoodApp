const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/apnafood", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const foodCollection = mongoose.connection.db.collection("foodItems");
    const foodDataItems = await foodCollection.find({}).toArray();

    const foodCategoryCollection =
      mongoose.connection.db.collection("foodCategory");
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    global.food_items = foodDataItems;
    global.food_category = foodCategoryData;
    // console.log("Food Items:", foodDataItems);
    // console.log("Food Categories:", foodCategoryData);

    // Uncomment the following lines if you need to set global variables
    // global.food_items = foodData;
    // console.log("Data:", global.food_items);
  } catch (error) {
    console.error("Error:", error.message);
  }
  // finally {
  //   try {
  //     // await mongoose.connection.close();
  //     console.log("Connection closed");
  //   } catch (closeError) {
  //     console.error("Error closing connection:", closeError.message);
  //   }
  // }
}

module.exports = connectDB;
