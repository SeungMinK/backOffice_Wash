let express = require("express");
let router = express.Router();

const getConnection = require("../../lib/db");
const logger = require("../../public/js/logger");
const exec_sql = require("../../public/js/exec_sql");

const ACCESS_TOKEN = process.env.ACCESS_TOKEN; // ACCESS_TOKEN
require("dotenv").config();

router.post("/inquiry", function (req, res) {
  /*사용자 검증 */
  const accessToken = req.headers.authorization.split(" ")[1];
  if (accessToken === ACCESS_TOKEN) {
    /*Authorization*/

    /*LEFT JOIN Version */
    // const selectDataQuery = `
    //     select COUNT(c.CGR_NM) COUNT,c.CGR_NM,c.CGR_ID,o.ORDER_ID,i.ITEM_ID  from TBL_CATEGORY c
    //     LEFT JOIN TBL_ORDER o ON c.CGR_ID = o.CGR_ID
    //     LEFT JOIN TBL_ITEM i ON o.ORDER_ID  = i.ORDER_ID
    //     group by c.CGR_NM
    //     HAVING  COUNT(c.CGR_NM) >= 1
    //     `;
    // getConnection((connection) => {
    //   (async () => {
    //     try {
    //       const inquiryData = await exec_sql(connection, selectDataQuery);
    //       if (inquiryData) res.status(200).send(inquiryData);
    //       else res.status(400).send(false);
    //     } catch (err) {
    //       console.log(err);
    //     } finally {
    //       connection.release();
    //     }
    //   })();
    // });

    /*Multi Query Version*/
    const categoriesDataQuery = `
        select COUNT(c.CGR_NM) COUNT,c.CGR_NM, c.CGR_ID from TBL_CATEGORY c
         LEFT JOIN TBL_ORDER o ON c.CGR_ID = o.CGR_ID
         LEFT JOIN TBL_ITEM i ON o.ORDER_ID  = i.ORDER_ID
         group by c.CGR_NM
         HAVING  COUNT(c.CGR_NM) >= 1
        `;

    const orderDataQuery = `
           select CGR_ID,ORDER_ID from TBL_ORDER;
        `;

    const itemDataQuery = `
           select ORDER_ID,ITEM_ID from TBL_ITEM;
        `;

    getConnection((connection) => {
      (async () => {
        try {
          const categoriesData = await exec_sql(connection, categoriesDataQuery);
          const orderData = await exec_sql(connection, orderDataQuery);
          const itemData = await exec_sql(connection, itemDataQuery);
          if (categoriesData) res.status(200).send({ categoriesData, orderData, itemData });
          else res.status(400).send(false);
        } catch (err) {
          console.log(err);
        } finally {
          connection.release();
        }
      })();
    });
  } else {
    /*unAuthorization*/
    res.status(401).send(false);
  }
});

module.exports = router;
