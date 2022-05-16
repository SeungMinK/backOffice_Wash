/*WEB SERVER*/

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const app = express();
const logger = require("../public/js/logger");
/*모듈 사용 선언*/

app.use(express.static(path.join(process.env.BUILD_PATH, "build")));

// 보안 처리
const helmet = require("helmet"); // Http 헤더 설정을 자동으로 바꾸어주어 잘 알려진 몇가지 앱의 취약성으로 부터 앱을 보호
app.disable("x-powered-by"); // Express가 사용되었다는 것을 숨기는 방법
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter()); // XSS(교차 사이트 스크립팅) 방어
app.use(helmet.frameguard("deny")); // 클릭재킹으로 부터 보호(deny:프레임 내에 우리 사이트를 넣지 못하게 함)
app.use(cors()); //cors 에러 해결

// route
app.get("/*", function (req, res) {
  res.sendFile(process.env.BUILD_PATH + "/build/index.html");
});

/*WebServer 서버 오픈 port*/
const port = 80;

/* HTTP */
app.listen(port, () => {
  logger.info(`[http]WEB SERVER START PORT :  ${port}`);
});
