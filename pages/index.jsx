import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout, Menu } from "antd";
import { Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { Card } from "antd";
import { Button, Popover, Drawer } from "antd";
import { Modal, Space } from "antd";
import { Result, message } from "antd";
import { Form, Input, Select } from "antd";
import { Carousel } from "antd";
import { Timeline } from "antd";
import { Divider } from "antd";
import { BackTop } from "antd";
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
  ChromeOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";

const contentStyle = {
  height: "370px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const { Meta } = Card;
const { TextArea } = Input;

const { Header, Content, Footer } = Layout;

function ContactForm() {
  const [state, handleSubmit] = useForm("mknkebvb");
  if (state.succeeded) {
    return (
      <Result
        status="success"
        title="Your message has been sent successfully"
        subTitle="As soon as possible I will reply to your email and give you an answer. Thanks for contacting me and have a nice day."
      />
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <Popover content="❗ Required Field">
          <h14 style={{ color: "red" }}>*</h14>
        </Popover>{" "}
        email :
      </label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        className="input-email"
        style={{ marginBottom: 20, marginTop: 10 }}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="object">
        <Popover content="❗ Required Field">
          <h14 style={{ color: "red" }}>*</h14>
        </Popover>{" "}
        object :
      </label>
      <Input
        id="object"
        type="object"
        name="object"
        placeholder="Object"
        className="input-email"
        style={{ marginBottom: 20, marginTop: 10 }}
        required
      />
      <ValidationError prefix="Object" field="object" errors={state.errors} />
      <label htmlFor="message" style={{ float: "left" }}>
        <Popover content="❗ Required Field">
          <h14 style={{ color: "red" }}>*</h14>
        </Popover>{" "}
        message :
      </label>
      <TextArea
        id="message"
        name="message"
        autoSize={{ minRows: 3, maxRows: 5 }}
        style={{ marginTop: 10 }}
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div style={{ marginTop: 22, marginLeft: 10 }}>
        <button
          type="submit"
          className="button-submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

const Home = () => {
  const [navbar, setNavbar] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout id="home">
      <Drawer placement="top" onClose={onClose} visible={visible}>
        <Menu
          theme="light"
          mode="vertical"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "table",
            fontSize: 24,
            color: "grey",
            fontWeight: 400,
            marginTop: "30%",
          }}
        >
          <MenuItem ><a onClick={onClose}  href="#about"><p style={{color: 'grey'}}>About</p></a></MenuItem>
          <MenuItem ><a onClick={onClose} style={{color: 'grey !important'}} href="#skill"><p style={{color: 'grey'}}>Skills</p></a></MenuItem>
          <MenuItem ><a onClick={onClose} style={{color: 'grey !important'}} href="#contact"><p style={{color: 'grey'}}>Contact</p></a></MenuItem>
        </Menu>
        <Button
          onClick={showModal}
          className="contact-drawer-button"
          icon={<MailOutlined />}
          rel="noreferrer"
        >
          Contact
        </Button>
        <div className="icon-drawer">
          <LinkedinOutlined style={{ marginRight: 40 }} />
          <GithubOutlined />
          <InstagramOutlined style={{ marginLeft: 40 }} />
        </div>
      </Drawer>
      <Modal
        title="Fill in the fields"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ContactForm />
      </Modal>
      <Head>
        <title>Flavio Moceri&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link rel="stylesheet" href="animate.min.css" />
      </Head>
      <body>
        <BackTop>
          <div className="backtop">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/"
              style={{
                fontSize: 30,
                backgroundColor: "black",
                color: "#02d783",
                padding: 5,
                borderRadius: 5,
              }}
            >
              {<LinkedinOutlined />}
            </a>
          </div>
        </BackTop>
        <Header style={{ position: "fixed", zIndex: 3, width: "100%" }}>
          <Menu
            theme="light"
            className={navbar ? "ant-layout-header" : "background-image"}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" className="logo">
              <a href="#home">
                <img src="logo_piccolo.png" />
              </a>
            </Menu.Item>
            <Menu.Item className="button-drawer" onClick={showDrawer}>
              <a><MenuOutlined /></a>
            </Menu.Item>
            <Menu.Item key="2" className="menuitem-drawer">
              <a href="#about">About</a>
            </Menu.Item>
            <Menu.Item key="3" className="menuitem-drawer">
              <a href="#skill">Skills</a>
            </Menu.Item>
            <Menu.Item key="4" className="menuitem-drawer">
              <a href="#contact">Contacts</a>
            </Menu.Item>
            <Menu.Item className="margin-linkedin">
              <a
                href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  icon={<LinkedinOutlined />}
                  rel="noreferrer"
                  style={{
                    backgroundColor: "#02d783",
                    borderColor: "black",
                    color: "#FDFFFF",
                    borderRadius: "15px",
                  }}
                >
                  LinkedIn
                </Button>
              </a>
            </Menu.Item>
          </Menu>
        </Header>
        <main className="background-image2">
          <Row>
            <Col className="main-icon" span={3}>
              <div className="main-icon">
                <LinkedinOutlined />
                <GithubOutlined style={{ marginTop: 30 }} />
                <InstagramOutlined style={{ marginTop: 30 }} />
              </div>
            </Col>
            <Col span={20} md={9}>
              <div className="main-div">
                <h1 className="main-title">Hi, I&apos;m Flavio</h1>
                <h6 className="main-subtitle">Web Developer</h6>
                <p className="main-paragraph">
                  I design and code beautifully simple things, and I love what I
                  do.
                </p>
                <div className="div-avatar">
                  <img className="main-avatar" src="myAvatar.svg" />
                  <h1 className="main-job">FRONTEND DEVELOPER</h1>
                </div>
                <a href="#skill">
                  <div className="main-scroll">
                    <h3
                      className="animated bounce"
                      style={{ fontSize: 24, color: "#F6F6F6" }}
                    >
                      Scroll down⠀
                      <img style={{ width: 20 }} src="scroll-down.svg" />
                    </h3>
                  </div>
                </a>
              </div>
            </Col>
            <Col span={11}>
              <img className="avatar" src="myAvatar.svg" />
              <h1 className="job">FRONTEND DEVELOPER</h1>
            </Col>
          </Row>
          <p id="skill"></p>
        </main>
        <Content>
          <div>
            <h1 className="title-paragraph">Skills</h1>
            <Carousel style={{ marginTop: 50 }} autoplay loop>
              <div>
                <Row style={contentStyle}>
                  <Col xs={{ span: 5, offset: 4 }} lg={{ span: 5, offset: 4 }}>
                    <Card
                      hoverable
                      className="boxshadow_card"
                      style={{ width: 280, borderRadius: 40 }}
                      cover={<img alt="react" src="react.png" />}
                    >
                      <Meta
                        title="ReactJS"
                        description="Skill - Intermediate"
                      />
                    </Card>
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                    <Card
                      hoverable
                      className="boxshadow_card"
                      style={{ width: 280, borderRadius: 40 }}
                      cover={<img alt="html" src="html1.png" />}
                    >
                      <Meta title="Html" description="Skill - Advanced" />
                    </Card>
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                    <Card
                      hoverable
                      className="boxshadow_card"
                      style={{ width: 280, borderRadius: 40 }}
                      cover={<img alt="css" src="css1.png" />}
                    >
                      <Meta title="CSS" description="Skill - Advanced" />
                    </Card>
                  </Col>
                </Row>
              </div>
              <div>
                <Row style={contentStyle}>
                  <Col xs={{ span: 5, offset: 4 }} lg={{ span: 5, offset: 4 }}>
                    <Card
                      hoverable
                      className="boxshadow_card"
                      style={{ width: 280, borderRadius: 40 }}
                      cover={<img alt="python" src="python1.png" />}
                    >
                      <Meta title="Python" description="Skill - Intermediate" />
                    </Card>
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                    <Card
                      hoverable
                      className="boxshadow_card"
                      style={{ width: 280, borderRadius: 40 }}
                      cover={<img alt="json" src="json1.png" />}
                    >
                      <Meta title="Json" description="Skill - Base" />
                    </Card>
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                    <Card
                      hoverable
                      className="boxshadow_card"
                      style={{ width: 280, borderRadius: 40 }}
                      cover={<img alt="mongo" src="mongo1.png" />}
                    >
                      <Meta title="MongoDB" description="Skill - Base" />
                    </Card>
                  </Col>
                </Row>
              </div>
            </Carousel>
          </div>
          <p id="about"></p>
          <div style={{ backgroundColor: "#f5f5f5" }}>
            <Divider />
            <div>
              <div>
                <img className="about-image" src="about.png" />
              </div>
              <h2 className="title-paragraph2">About Me</h2>
              <div className="paragraph2">
                <h7>
                  The secret of getting
                  <br />
                  ahead is getting started.
                </h7>
              </div>
              {
                <LineOutlined
                  style={{
                    width: "33%",
                    fontSize: "35px",
                    color: "#02d783",
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                />
              }
              <div style={{ marginLeft: "15%", paddingBottom: 10 }}>
                <Row>
                  <Col span={20}>
                    <p>
                      I&apos;m a novice frontend developer, I enjoy programming
                      simple things and solving new problems every day. I think
                      that teamwork is the most important part to carry out
                      great projects because being together with other people
                      who share your passions not only gives you the opportunity
                      to expose yourself, but to learn aspects, details that you
                      would have neglected until then.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <Divider />
          </div>
          <Timeline mode="alternate" style={{ width: "99%", marginTop: 100 }}>
            <Timeline.Item>
              <h1 className="title_timeline">
                The beginning is always the hardest part.
              </h1>
              <img className="image_timeline" src="start.png" />
              <p style={{ marginRight: 20, marginLeft: 20 }}>
                I owe everything to my brother, he passed on his passion to me.
                I thought several times about leaving for friends or other, but
                I always continued, I feel that if you really believe it, sooner
                or later it happens and over time realized that the thinking of
                others is not so important.
              </p>
            </Timeline.Item>
            <Timeline.Item dot={<CodeOutlined style={{ fontSize: "16px" }} />}>
              <h1 className="title_timeline">Codecademy and Myself</h1>
              <img className="image_timeline" src="codecademy.png" />
              <p style={{ marginRight: 20, marginLeft: 70 }}>
                Through Codecademy and myself, I was able to acquire the
                knowledge, thanks to the internet now anyone can learn
                everything they want, there are no more excuses, it all depends
                on their own determination,
              </p>
            </Timeline.Item>
            <Timeline.Item
              dot={<ShoppingCartOutlined style={{ fontSize: "16px" }} />}
            >
              <h1 className="title_timeline">The E-Commerce World</h1>
              <img className="image_timeline" src="e-commerce.png" />
              <p style={{ marginRight: 20, marginLeft: 20 }}>
                In the winter of 2019 with the pandemic, many shops needed a
                site to continue working, scared by the situation, so I started
                making them, gaining a lot of experience.
              </p>
            </Timeline.Item>
            <Timeline.Item dot={<BookOutlined style={{ fontSize: "16px" }} />}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ricerca-libri.it/"
              >
                <h1 className="title_timeline">Ricerca-Libri.it</h1>
              </a>
              <img className="image_timeline" src="ricerca.png" />
              <p style={{ marginRight: 20, marginLeft: 70 }}>
                I create this site to learn and for fun, you can know the books
                to acquire to start the school year. Through WebScraping I can
                get the information by creating a bot from Libraccio.it and
                printing it on my site.
              </p>
            </Timeline.Item>
            <Timeline.Item>
              <h1 className="title_timeline">For the future</h1>
              <img className="image_timeline" src="future.png" />
              <p style={{ marginRight: 20, marginLeft: 20 }}>
                This year I will finish high school. For the future, my choice
                is to do a three-year degree at LUISS, such as: Management and
                Computer Science or Economics and Management, or to enroll at
                the 42 Rome LUISS school, because I really consider it
                revolutionary and I am very attracted to it.
              </p>
            </Timeline.Item>
          </Timeline>
          <div>
            <h1 className="text-machine">
              Among the knowledge acquired over the years, I tried to learn the
              most important technologies that
              <br />
              could allow me to develop the best possible knowledge, such as{" "}
              <span style={{ color: "#02d783" }}>
                <Typewriter
                  words={[
                    "ReactJS",
                    "Html",
                    "CSS",
                    "Python",
                    "Json",
                    "MongoDB",
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={3000}
                  onLoopDone={handleDone}
                />
              </span>
            </h1>
          </div>
          <div style={{ marginTop: 50, marginBottom: 70 }} id="contact">
            <div>
              <div>
                <Card className="form">
                  <ContactForm />
                </Card>
              </div>
              <div className="paragraph-contact">
                <h7>How to contact me</h7>
              </div>
              {
                <LineOutlined
                  style={{
                    width: "33%",
                    fontSize: "35px",
                    color: "#02d783",
                    marginBottom: 20,
                  }}
                />
              }
              <a href="tel:+393883289985" rel="noreferrer" target="_blank">
                <div style={{ marginLeft: "15%", paddingBottom: 10 }}>
                  <p className="contact">
                    {
                      <PhoneOutlined
                        style={{
                          color: "#02d783",
                          marginRight: "9px",
                          fontSize: "19px",
                        }}
                      />
                    }
                    +39 388 328 9985
                  </p>
                </div>
              </a>
              <a
                href="mailto:moceri.flavio@gmail.com?subject=Feedback&body=Message&send=true"
                rel="noreferrer"
                target="_blank"
              >
                <div style={{ marginLeft: "15%", paddingBottom: 10 }}>
                  <p className="contact">
                    {
                      <MailOutlined
                        style={{
                          color: "#02d783",
                          marginRight: "9px",
                          fontSize: "19px",
                        }}
                      />
                    }
                    moceri.flavio@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://flaviomoceri.it"
                rel="noreferrer"
                target="_blank"
              >
                <div style={{ marginLeft: "15%", paddingBottom: 10 }}>
                  <p className="contact">
                    {
                      <ChromeOutlined
                        style={{
                          color: "#02d783",
                          marginRight: "9px",
                          fontSize: "19px",
                        }}
                      />
                    }
                    flaviomoceri.it
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Content>
      </body>
      <Footer className="footer">
        <h7>
          Coded with 💚 by{" "}
          <a
            className="text_footer"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/"
          >
            @flaviomoceri
          </a>
        </h7>
      </Footer>
    </Layout>
  );
};

export default Home;
