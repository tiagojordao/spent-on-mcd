const express = require("express");
const cors = require("cors");

const { createTables } = require('./database/createTables');

const router = require("./routes/routes.js");
const app = express();

app.use(express.json());
app.use(cors());

// createTables();

app.use(router);

app.listen(3001, () => console.log("Server is Running!"));