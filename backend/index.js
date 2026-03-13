require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;
const mongoose = require("mongoose");

async function main(){
  await mongoose.connect(MONGO_URL);
};

main()
.then(()=>{
  console.log("connected to Db")
})
.catch((err)=>{
  console.log(err);
})
app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});
