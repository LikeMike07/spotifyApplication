require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const Routes = require('./routes/routes.js');

const PORT = process.env.PORT || 8080;

app.use('/', Routes);



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});