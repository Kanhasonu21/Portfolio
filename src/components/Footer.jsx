import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiBlogger } from 'react-icons/si';

function Footer() {
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='6' className='footer-copywright'>
          <h3>Made with 💛 &nbsp; by Kanhaiya</h3>
        </Col>
        {/* <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} KK</h3>
        </Col> */}
        <Col md='6' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='https://github.com/kanhasonu21'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://twitter.com/kanhaiya__k'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/kanhasonu21/'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://hashnode.com/@kanhasonu21'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <SiBlogger />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
