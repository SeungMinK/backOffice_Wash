let express = require("express");
let router = express.Router();

const getConnection = require("../../lib/db");
const logger = require("../../public/js/logger");
const exec_sql = require("../../public/js/exec_sql");

router.get("/test", function (req, res) {
  const selectQuery = `select * from TBL_CATEGORY`;
  getConnection((connection) => {
    exec_sql(connection, selectQuery)
      .then((response) => {
        console.log(response[0].CGR_ID);

        res.send(`정상 연결  : ${response[0].CGR_ID}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        connection.release();
      });
  });
});

module.exports = router;
