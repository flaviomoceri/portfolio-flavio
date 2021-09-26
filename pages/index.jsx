import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout, Menu} from "antd";
import { Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import {Button } from "antd";
import { Carousel } from 'antd';

import {
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined
} from "@ant-design/icons";

const contentStyle = {
  height: '370px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const { Meta } = Card;

const { Header, Content, Footer } = Layout;

const Home = () => {
  const [navbar, setNavbar] = useState(false);

  
 

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });

  return (
    <Layout id="home">
      <Head>
        <title>Flavio Moceri&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="animate.min.css"/>
      </Head>
      <body>
        <Header
          
          style={{ position: "fixed", zIndex: 3, width: "100%" }}
        >
          <Menu
          theme="light"
            className={navbar ? "ant-layout-header" : "background-image"}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item
              style={{
                marginRight: "300px",
                marginLeft: "220px",
                fontSize: "30px",
                fontFamily: "horizon",
              }}
            >
              <a href="#home"><img src="logo_piccolo.png"/></a>
            </Menu.Item>
            <Menu.Item key="1">
              <a href="#home">About</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#calendario">Projects</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#grafici">Contacts</a>
            </Menu.Item>
            <Menu.Item
            style={{
              marginLeft: "25%",
            }}>
              <a href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/" target="_blank">
            <Button icon={<LinkedinOutlined />} rel="noreferrer" style={{'backgroundColor': "#02d783", 'borderColor': 'black', 'color': '#FDFFFF', 'borderRadius': '15px'}} >
          LinkedIn
        </Button>
        </a>
        </Menu.Item>
          </Menu>
        </Header>
        <main className="background-image2">
          <Row>
            <Col className="main-icon" span={6}>
              <div className="main-icon">
            <LinkedinOutlined  />
            <GithubOutlined style={{marginTop: 30}}/>
            <InstagramOutlined style={{marginTop: 30}}/>
            </div>
            </Col>
            <Col span={7}>
              <div>
            <h1 className='main-title'>Hi, I&apos;sm Flavio</h1>
            <h6 className='main-subtitle'>Sviluppatore Web</h6>
            <p className="main-paragraph">I design and code beautifully simple things, and I love what I do.</p>
            <div className='main-scroll'>
            <h3 className='animated bounce' style={{fontSize: 24, color: '#F6F6F6'}}>Scroll down⠀<img style={{width: 20}} src="scroll-down.svg"/></h3>
            </div>
            </div>
            </Col>
          </Row>
        </main>
        <Content>
          <h1 className="title-paragraph">Competenze</h1>
        <Carousel style={{marginTop: 50}} autoplay loop>
    <div> 
    <Row style={contentStyle}>
    <Col xs={{ span: 5, offset: 4 }} lg={{ span: 5, offset: 4 }}>
    <Card
    hoverable
    className='boxshadow_card'
    style={{ width: 280, borderRadius: 40 }}
    cover={<img alt="react" src="react.png" />}
  >
    <Meta title="ReactJS" description='Skill - Intermedia' />
  </Card>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
    <Card
    hoverable
    className='boxshadow_card'
    style={{ width: 280, borderRadius: 40 }}
    cover={<img alt="html" src="html1.png" />}
  >
    <Meta title="Html" description="Skill - Avanzata" />
  </Card>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
    <Card
    hoverable
    className='boxshadow_card'
    style={{ width: 280, borderRadius: 40 }}
    cover={<img alt="css" src="css1.png" />}
  >
    <Meta title="CSS" description="Skill - Avanzata" />
  </Card>
    </Col>
  </Row>
    </div>
    <div>
    <Row style={contentStyle}>
    <Col xs={{ span: 5, offset: 4 }} lg={{ span: 5, offset: 4 }}>
    <Card
    hoverable
    className='boxshadow_card'
    style={{ width: 280, borderRadius: 40 }}
    cover={<img alt="python" src="python1.png" />}
  >
    <Meta title="Python" description='Skill - Intermedia' />
  </Card>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
    <Card
    hoverable
    className='boxshadow_card'
    style={{ width: 280, borderRadius: 40 }}
    cover={<img alt="json" src="json1.png" />}
  >
    <Meta title="Json" description="Skill - Base" />
  </Card>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
    <Card
    hoverable
    className='boxshadow_card'
    style={{ width: 280, borderRadius: 40 }}
    cover={<img alt="mongo" src="mongo1.png" />}
  >
    <Meta title="MongoDB" description="Skill - Base" />
  </Card>
    </Col>
  </Row>
    </div>
  </Carousel>
  <h1>cazzo dio</h1>
        </Content>
      </body>
      <Footer className="footer">
       <h7>Coded with 💚 by <a className="text_footer" rel="noreferrer" href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/" target="_blank">@flaviomoceri</a></h7>
      </Footer>
    </Layout>
  );
};

export default Home;
