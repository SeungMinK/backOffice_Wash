## Site

[Show Wep App](http://61.79.180.195)
![MainPage](https://user-images.githubusercontent.com/20696473/168946773-dbb1c5b0-1f7b-47da-bb3a-3d46adaafa51.JPG)

## DB_Table

![DB_TABLE](https://user-images.githubusercontent.com/20696473/168809147-06f61594-3de9-463b-911c-504e1cae01ac.png)

###SQL
```
CREATE TABLE `TBL_CATEGORY` (
  `CGR_ID` varchar(20) NOT NULL COMMENT '카테고리 ID',
  `CGR_NM` varchar(1000) DEFAULT NULL COMMENT '카테고리명',
  `USE_YN` varchar(1) DEFAULT NULL COMMENT '사용 여부',
  `REG_DT` datetime DEFAULT NULL COMMENT '등록 일시',
  `REG_USER_ID` varchar(20) DEFAULT NULL COMMENT '등록한 사용자 ID',
  `UPD_DT` datetime DEFAULT NULL COMMENT '수정 일시',
  `UPD_USER_ID` varchar(20) DEFAULT NULL COMMENT '수정한 사용자 ID',
  PRIMARY KEY (`CGR_ID`)
)


CREATE TABLE `TBL_ORDER` (
  `CGR_ID` varchar(20) DEFAULT NULL COMMENT '카테고리 ID',
  `ORDER_ID` varchar(20) NOT NULL COMMENT '주문 ID',
  `REG_DT` datetime DEFAULT NULL COMMENT '등록 일시',
  `REG_USER_ID` varchar(20) DEFAULT NULL COMMENT '등록한 사용자 ID',
  `UPD_DT` datetime DEFAULT NULL COMMENT '수정 일시',
  `UPD_USER_ID` varchar(20) DEFAULT NULL COMMENT '수정한 사용자 ID',
  PRIMARY KEY (`ORDER_ID`),
  KEY `CGR_ID` (`CGR_ID`),
  CONSTRAINT `tbl_order_ibfk_1` FOREIGN KEY (`CGR_ID`) REFERENCES `TBL_CATEGORY` (`CGR_ID`)
)

CREATE TABLE `TBL_ITEM` (
  `ORDER_ID` varchar(20) DEFAULT NULL COMMENT '주문 ID',
  `ITEM_ID` varchar(20) NOT NULL COMMENT '아이템 ID',
  `REG_DT` datetime DEFAULT NULL COMMENT '등록 일시',
  `REG_USER_ID` varchar(20) DEFAULT NULL COMMENT '등록한 사용자 ID',
  `UPD_DT` datetime DEFAULT NULL COMMENT '수정 일시',
  `ITEM_SEQ` smallint(8) NOT NULL COMMENT '아이템 순번',
  `UPD_USER_ID` varchar(20) DEFAULT NULL COMMENT '수정한 사용자 ID',
  PRIMARY KEY (`ITEM_ID`),
  KEY `ORDER_ID` (`ORDER_ID`),
  CONSTRAINT `tbl_item_ibfk_1` FOREIGN KEY (`ORDER_ID`) REFERENCES `TBL_ORDER` (`ORDER_ID`)
)
```

## Skiles

<li>React</li>
<li>Express</li>
<li>MariaDB</li>
