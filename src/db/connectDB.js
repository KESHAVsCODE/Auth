const mongoose = require("mongoose");

const password = encodeURIComponent("mongo9058");
const databaseName = "KeshavDB";
const url = `mongodb+srv://keshavdb:${password}@keshav.f1rfheg.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const optionalParams = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
};

mongoose
  .connect(url, optionalParams)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log(`Error occur while connecting Database:${err.message}`);
  });
``;
