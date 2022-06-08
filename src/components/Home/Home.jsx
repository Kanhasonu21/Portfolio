import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiBlogger} from "react-icons/si";

import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Kanhaiya Kumar</strong>
              </h1>
              <div className="social-container">
                <div className="social-icon">
                <a
                    href="https://www.linkedin.com/in/kanhasonu21/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <FaLinkedin />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href="https://www.github.com/kanhasonu21"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href="https://www.instagram.com/kanhasonu.21/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>

                <div className="social-icon">
                  <a
                    href="https://kanhaiyakumar.hashnode.dev/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiBlogger />
                  </a>
                </div>

                <div className="social-icon">
                  <a
                    href="https://twitter.com/kanhaiya__k"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              <div style={{ padding: "20px 50px", textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
