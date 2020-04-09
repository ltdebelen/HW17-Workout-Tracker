const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds335668.mlab.com:35668/heroku_9p5vfzzz",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}!`);
});
