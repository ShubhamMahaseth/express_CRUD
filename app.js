const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const bodyParser = require("body-parser");
dotenv.config();

(async function handleDB() {
  try {
    let result = await mongoose.connect(process.env.MONGODB_URI);
    console.log(result.connection.name);
  } catch (err) {
    console.log(err);
  }
})();

app.use(express.json());
app.use(cors());
app.use("/account", authRoute);
app.use("/products", productRoute);

app.listen(3000, (res) => console.log(`Port listening at ${process.env.PORT}`));
