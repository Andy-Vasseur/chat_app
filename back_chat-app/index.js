require("dotenv").config();

const express = require("express");

const cors = require("cors");

const router = require("./app/routers/index");

const app = express();

app.use(cors());

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3310;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:PORT`);
});
