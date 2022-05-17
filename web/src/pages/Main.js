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

  const [washData, setWashData] = useState();

  /*데이터 조회*/
  const onDataHandler = () => {
    axios
      .post(`${API_HOST}/api/main/test`, [], { headers })
      .then((response) => {
        setWashData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onDataHandler();
  }, []);
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
            <div className="site-layout-background">
              {/* 임시 데이터 */}
              <div className="categories-wrap">
                <div className="content-title-wrap">
                  <center className="content-title-text">잠겨있는 주문 </center>
                  <div className="content-count-wrap">
                    <center className="content-count-text">1</center>
                  </div>
                </div>

                <div className="content-order-wrap">
                  <div className="content-order-text-wrap">
                    <center className="content-order-text">YJA352CB0302927</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                </div>
              </div>
              {/* ===========*/}

              {/* 임시 데이터 */}
              <div className="categories-wrap">
                <div className="content-title-wrap">
                  <center className="content-title-text">아이템 생성 안됨 </center>
                  <div className="content-count-wrap">
                    <center className="content-count-text">558</center>
                  </div>
                </div>

                <div className="content-order-wrap">
                  <div className="content-order-text-wrap">
                    <center className="content-order-text">YJA352CB0302927</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                </div>

                <div className="content-order-wrap">
                  <div className="content-order-text-wrap">
                    <center className="content-order-text">YJA352CB0302927</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                </div>

                <div className="content-order-wrap">
                  <div className="content-order-text-wrap">
                    <center className="content-order-text">YJA352CB0302927</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                </div>
              </div>
              {/* ===========*/}

              {/* 임시 데이터 */}
              <div className="categories-wrap">
                <div className="content-title-wrap">
                  <center className="content-title-text">가격 설정 안됨 </center>
                  <div className="content-count-wrap">
                    <center className="content-count-text">558</center>
                  </div>
                </div>

                <div className="content-order-wrap">
                  <div className="content-order-text-wrap">
                    <center className="content-order-text">YJA352CB0302927</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                  <div className="content-item-wrap">
                    <center className="content-item-text">46-0-330</center>
                  </div>
                </div>
              </div>
              {/* ===========*/}
            </div>
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
