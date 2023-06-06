const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

const dataRoutes = require("./routes/dataRoutes");

const url = "mongodb://localhost:27017/blackoffer";

mongoose.Promise = global.Promise;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  console.log(`unable to connect to database: ${url}`);
});

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", dataRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server starting on port 3000");
  console.log("Listening on port 3000...");
});
