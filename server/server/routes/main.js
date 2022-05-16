let express = require("express");
let router = express.Router();

const getConnection = require("../../lib/db");
const logger = require("../../public/js/logger");
const exec_sql = require("../../public/js/exec_sql");

router.get("/test", function (req, res) {
  res.send("정상 연결");
});

module.exports = router;
