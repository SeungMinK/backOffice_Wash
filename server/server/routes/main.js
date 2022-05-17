let express = require("express");
let router = express.Router();

const getConnection = require("../../lib/db");
const logger = require("../../public/js/logger");
const exec_sql = require("../../public/js/exec_sql");

const ACCESS_TOKEN = process.env.ACCESS_TOKEN; // ACCESS_TOKEN
require("dotenv").config();

router.post("/inquiry", function (req, res) {
  const accessToken = req.headers.authorization.split(" ")[1];

  if (accessToken === ACCESS_TOKEN) {
    const selectQuery = `select * from TBL_CATEGORY`;
    getConnection((connection) => {
      exec_sql(connection, selectQuery)
        .then((response) => {
          if (response[0]) res.status(200).send(response);
          else res.status(400).send(response);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          connection.release();
        });
    });
  } else {
    res.status(401).send(false);
  }
});

module.exports = router;
