import React from "react";
import "antd/dist/antd.min.css";
import "../css/main.css";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

function Main() {
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
            <div
              className="site-layout-background"
              style={{
                padding: 24,
              }}
            >
              <div>
                <span>카테고리1</span>
                <span>카테고리2</span>
                <span>카테고리3</span>
              </div>
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
