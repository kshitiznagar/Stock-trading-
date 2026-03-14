require("dotenv").config();
const express = require("express");
const app = express();
const BodyParser = require("body-parser")
const cors = require("cors")
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;
const mongoose = require("mongoose");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("connected to Db");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});
