const orderModel = require("../models/orderModel");

const orderDataController = async (req, res) => {
  let data = req.body.order_data;
  data.splice(0, 0, { Order_date: req.body.order_date });
  console.log("1231242343242354", req.body.email);

  try {
    // Check if email exists in the database
    let eId = await orderModel.findOne({ email: req.body.email });
    console.log(eId);

    if (eId === null) {
      // Email not existing, create a new order
      console.log(data);
      console.log("1231242343242354", req.body.email);
      await orderModel.create({
        email: req.body.email,
        order_data: [data],
      });
      res.json({ success: true });
    } else {
      // Email existing, update the order
      await orderModel.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );
      res.json({ success: true });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

const myorderDataController = async (req, res) => {
  try {
    console.log(req.body.email);
    let eId = await orderModel.findOne({ email: req.body.email });
    //console.log(eId)
    res.json({ orderData: eId });
  } catch (error) {
    res.send("Error", error.message);
  }
};
module.exports = {
  orderDataController,
  myorderDataController,
};
