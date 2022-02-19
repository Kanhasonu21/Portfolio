import React from 'react';
import { Container, Row, Col, Tooltip } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import profile from '../../Assets/profile.jpeg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiBlogger } from 'react-icons/si';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I can be different person for different people. It depends on what
              you are seeking.
              <br /> <br />
              I believe that our work denotes who we are and I constantly strive
              in making my answer to who I am a better one.
              <br />
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='purple'>Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className='purple'>Node.js</b> and
              <i>
                <b className='purple'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt
              className='tilt-img'
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={900}
              scale={1.1}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <img
                src={profile}
                className='rounded-circle shadow-4'
                style={{ width: '80%', border: '2px solid #c770f0' }}
                alt='avatar'
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/kanhasonu21'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/kanhaiya__k'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/kanhasonu21/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://hashnode.com/@kanhasonu21'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <SiBlogger />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
