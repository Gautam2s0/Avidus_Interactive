const express = require("express");
require("dotenv").config();
const { connection } = require("./Configs/db");

const cors = require("cors");
const app = express();
 

// middlewares:-
app.use(cors());
app.use(express.json()); 

app.get("/",(req,res)=>{
  res.send("Home page")
})



 

//connect to the server:-
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(`Cannot connect to DB: ${err}`);
  }
  console.log(`Server is running on http://localhost:${process.env.port?6000:4500}`);
});