const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');
app.use(cors({
  origin: 'http://localhost:4200', // Your Angular app URL
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGO_URL)
  .then((res) => {
    console.log("Db connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });




app.use("/api", routes);

app.listen(8003, () => {
  console.log("server is running");
});