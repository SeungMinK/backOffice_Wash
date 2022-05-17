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
    const selectDataQuery = `
        select c.CGR_NM,c.CGR_ID,o.ORDER_ID,i.ITEM_ID  from TBL_CATEGORY c 
        LEFT JOIN TBL_ORDER o ON c.CGR_ID = o.CGR_ID 
        LEFT JOIN TBL_ITEM i ON o.ORDER_ID  = i.ORDER_ID
        `;

    getConnection((connection) => {
      (async () => {
        try {
          const inquiryData = await exec_sql(connection, selectDataQuery);
          if (inquiryData) res.status(200).send(inquiryData);
          else res.status(400).send(false);
        } catch (err) {
          console.log(err);
        } finally {
          connection.release();
        }
      })();
    });
  } else {
    res.status(401).send(false);
  }
});

module.exports = router;
