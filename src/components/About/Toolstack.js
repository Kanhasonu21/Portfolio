import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaSpotify />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaYoutube />
      </Col>
    </Row>
  );
}

export default Toolstack;
