import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import "../css/main.css";
import { Layout, Menu, Breadcrumb } from "antd";
import axios from "axios";
const { Header, Content, Footer } = Layout;

function Main() {
  /*서버 주소 */
  const API_HOST = process.env.REACT_APP_API_HOST;

  /*Login MSA를 통해 발급 받은 ACCESS_TOKEN(ENV로 대체)*/
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
  };

  /*데이터 저장 */
  const [washData, setWashData] = useState();

  /*데이터 조회*/
  const onDataHandler = () => {
    axios
      .post(`${API_HOST}/api/main/inquiry`, [], { headers })
      .then((response) => {
        /*데이터 저장 */
        setWashData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*페이지 렌더링시 데이터 조회 */
  useEffect(() => {
    onDataHandler();
  }, []);

  /*카테고리 View */
  const categoriesViewHandler = () => {
    return (
      <>
        {washData.categoriesData.map((data, index) => {
          return (
            <>
              <div className="categories-wrap">
                <div className="content-title-wrap">
                  <center className="content-title-text">{data.CGR_NM} </center>
                  <div className="content-count-wrap">
                    <center className="content-count-text">{data.COUNT}</center>
                  </div>
                </div>
                {orderViewHandler(data.CGR_ID)}
              </div>
            </>
          );
        })}
      </>
    );
  };

  /* 주문 View */
  const orderViewHandler = (CGR_ID) => {
    return (
      <>
        {washData.orderData
          .filter((data) => data.CGR_ID === CGR_ID)
          .map((data, index) => {
            return (
              <>
                <div className="content-order-wrap">
                  <div className="content-order-text-wrap">
                    <center className="content-order-text">{data.ORDER_ID}</center>
                  </div>
                  {itemViewHandler(data.ORDER_ID)}
                </div>
              </>
            );
          })}
      </>
    );
  };

  /*아이템 View */
  const itemViewHandler = (ORDER_ID) => {
    return (
      <>
        {washData.itemData
          .filter((data) => data.ORDER_ID === ORDER_ID)
          .map((data, index) => {
            return (
              <>
                <div className="content-item-wrap">
                  <center className="content-item-text">{data.ITEM_ID}</center>
                </div>
              </>
            );
          })}
      </>
    );
  };

  return (
    <>
      <>
        <Layout>
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
            }}
          >
            <div className="logo" />
            <span style={{ color: "#F0F8FF" }}>세탁 특공대 과제 전형</span>
            <span style={{ color: "#F0F8FF", float: "Right" }}>김승민</span>
          </Header>
          <Content
            className="site-layout"
            style={{
              padding: "0 50px",
              marginTop: 64,
            }}
          >
            <div className="site-layout-background">{washData ? categoriesViewHandler() : null}</div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            <div>
              <p>세탁 특공대 과제 전형 김승민</p>
              <p>Ant Design ©2018 Created by Ant UED</p>
            </div>
          </Footer>
        </Layout>
      </>
    </>
  );
}

export default Main;
