require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000;
//const PORT = process.env.SERVER_PORT || 6000;
const mongoDB = require("./db");
const bodyParser = require("body-parser");
const handleRoute = require("./Routes/userRoute");
const handleDisplayDataRoute = require("./Routes/displayDataRoutes");
const orderDataRoute = require("./Routes/orderDataRoutes");

// Connect to MongoDB
mongoDB();

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes Middleware
app.use("/api", handleRoute);
app.use("/api", handleDisplayDataRoute);
app.use("/api", orderDataRoute);

// Root Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});

// Graceful error handling
server.on("error", (err) => {
  if (err.code === "EACCES") {
    console.error(`Port ${PORT} requires elevated privileges`);
    process.exit(1);
  } else if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error(`Error occurred: ${err.message}`);
    process.exit(1);
  }
});

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const port = 5000;
// //const port = process.env.SERVER_PORT || 5000;
// const mongoDB = require("./db");
// const bodyParser = require("body-parser");
// const handleRoute = require("./Routes/userRoute");
// mongoDB();

// //CORS
// app.use((req, res, next) => {
//   res.setHeader("Access-control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Header",
//     "Origin, X-Requested-with, Contant-Type,Accept , Accept"
//   );
//   next();
// });

// //middleware or setup routes
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api", handleRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
