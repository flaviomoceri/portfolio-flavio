import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout, Menu} from "antd";
import { Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import {Button } from "antd";
import { Form, Input, Select } from 'antd';
import { Carousel } from 'antd';
import { Timeline } from 'antd';
import { Divider } from 'antd';
import {
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  LineOutlined,
  PhoneOutlined,
  CodeOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  MailOutlined,
  ChromeOutlined
} from "@ant-design/icons";

const contentStyle = {
  height: '370px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const { Meta } = Card;
const { TextArea } = Input;

const { Header, Content, Footer } = Layout;





  


const Home = () => {
  const [navbar, setNavbar] = useState(false);
  const [form] = Form.useForm();


  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  




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
              <a href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/" target="_blank" rel="noreferrer">
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
            <h1 className='main-title'>Hi, I&apos;m Flavio</h1>
            <h6 className='main-subtitle'>Sviluppatore Web</h6>
            <p className="main-paragraph">I design and code beautifully simple things, and I love what I do.</p>
            <div className='main-scroll'>
            <h3 className='animated bounce' style={{fontSize: 24, color: '#F6F6F6'}}>Scroll down⠀<img style={{width: 20}} src="scroll-down.svg"/></h3>
            </div>
            </div>
            </Col>
            <Col span={10}>
              <img className='avatar' src='myAvatar.svg'/>
              <h1 className={"job"}>FRONTEND DEVELOPER</h1>
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
   <div style={{backgroundColor: '#f5f5f5'}}>
     <Divider />
     <div>
       <div><img className="about-image" src="about.png"/></div>
       <h2 className="title-paragraph2">About Me</h2>
       <div className= "paragraph2">
       <h7>The secret of getting<br/>ahead is getting started.</h7>
       </div>
       {<LineOutlined style={{width: "33%", 'fontSize': '35px', 'color': '#02d783', marginBottom: 20, marginTop: 20}} />}
       <div style={{marginLeft: '15%', paddingBottom: 10}}>
       <Row>
      <Col span={20}><p>I&apos;m a novice frontend developer, I enjoy programming simple things and solving new problems every day. I think that teamwork is the most important part to carry out great projects because being together with other people who share your passions not only gives you the opportunity to expose yourself, but to learn aspects, details that you would have neglected until then.</p></Col>
    </Row>
    </div>
     </div>
     <Divider />
   </div>
   <Timeline mode="alternate" style={{width: '99%', marginTop: 100}}>
    <Timeline.Item>
      <h1 className="title_timeline">
        The beginning is always the hardest part.
        </h1>
        <img className='image_timeline' src="start.png"/>
    <p style={{marginRight: 20, marginLeft:20}}>
    I owe everything to my brother, he passed on his passion to me. I thought several times about leaving for friends or other, but I always continued, I feel that if you really believe it, sooner or later it happens and over time realized that the thinking of others is not so important.
    </p>
    </Timeline.Item>
    <Timeline.Item dot={<CodeOutlined style={{ fontSize: '16px' }} />}>
      <h1 className="title_timeline">Codecademy and Myself
      </h1>
      <img className='image_timeline' src="codecademy.png"/>
      <p style={{marginRight: 20, marginLeft:70}}>
      Through Codecademy and myself, I was able to acquire the knowledge, thanks to the internet now anyone can learn everything they want, there are no more excuses, it all depends on their own determination,
      </p>
    </Timeline.Item>
    <Timeline.Item  dot={<ShoppingCartOutlined style={{ fontSize: '16px' }} />}>
      <h1 className="title_timeline">The E-Commerce World</h1>
      <img className='image_timeline' src="e-commerce.png"/>
    <p style={{marginRight: 20, marginLeft:20}}>
In the winter of 2019 with the pandemic, many shops needed a site to continue working, scared by the situation, so I started making them, gaining a lot of experience.
</p>
</Timeline.Item>
    <Timeline.Item dot={<BookOutlined style={{ fontSize: '16px' }} />}>
      <a target="_blank" rel="noreferrer" href="https://www.ricerca-libri.it/"><h1 className="title_timeline">Ricerca-Libri.it
      </h1>
      </a>
      <img className='image_timeline' src="ricerca.png"/>
    <p style={{marginRight: 20, marginLeft:70}}>
    I create this site to learn and for fun, you can know the books to acquire to start the school year. Through WebScraping I can get the information by creating a bot from Libraccio.it and printing it on my site.
    </p>
    </Timeline.Item>
    <Timeline.Item>
   <h1 className="title_timeline">For the future</h1>
      <img className='image_timeline' src="future.png"/>
    <p style={{marginRight: 20, marginLeft:20}}>
    This year I will finish high school. For the future, my choice is to do a three-year degree at LUISS, such as: Management and Computer Science or Economics and Management, or to enroll at the 42 Rome LUISS school, because I really consider it revolutionary and I am very attracted to it.
    </p>
    </Timeline.Item>
  </Timeline>
  <div style={{marginTop: 50, marginBottom: 70}}>
     <div>
     <div>
       <Card className='form'>
     <Form  form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="email"
        label="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        name="object"
        label="object"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Object"  />
      </Form.Item>
      <Form.Item
        name="body"
        label="body"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          autoSize={{ minRows: 3, maxRows: 15 }}
        />
      </Form.Item>
      <Form.Item style={{marginLeft: '11%'}}>
        <Button type="primary" htmlType="submit" style={{marginRight: 20}}>
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
    </Card>
     </div>
       <div className= "paragraph-contact">
       <h7>How to contact me</h7>
       </div>
       {<LineOutlined style={{width: "33%", 'fontSize': '35px', 'color': '#02d783', marginBottom: 20}} />}
       <a href="tel:+393883289985" rel="noreferrer" target="_blank">
       <div style={{marginLeft: '15%', paddingBottom: 10}}>
       <p className='contact'>{<PhoneOutlined style={{color: '#02d783', marginRight: '9px', fontSize: '19px'}}/>}+39 388 328 9985</p>
    </div>
    </a>
    <a href="mailto:moceri.flavio@gmail.com?subject=Feedback&body=Message" rel="noreferrer" target="_blank">
    <div style={{marginLeft: '15%', paddingBottom: 10}}>
       <p className='contact'>{<MailOutlined style={{color: '#02d783', marginRight: '9px', fontSize: '19px'}}/>}moceri.flavio@gmail.com</p>
    </div>
    </a>
    <a href="https://flaviomoceri.it" rel="noreferrer" target="_blank">
    <div style={{marginLeft: '15%', paddingBottom: 10}}>
       <p className='contact'>{<ChromeOutlined style={{color: '#02d783', marginRight: '9px', fontSize: '19px'}}/>}flaviomoceri.it</p>
    </div>
    </a>
     </div>
   </div>
        </Content>
      </body>
      <Footer className="footer">
       <h7>Coded with 💚 by <a className="text_footer" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/">@flaviomoceri</a></h7>
      </Footer>
    </Layout>
  );
};

export default Home;
