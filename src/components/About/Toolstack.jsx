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
        <SiVisualstudiocode className='techicons-img' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiLinux className='techicons-img' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman className='techicons-img' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNetlify className='techicons-img' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaSpotify className='techicons-img' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaYoutube className='techicons-img' />
      </Col>
    </Row>
  );
}

export default Toolstack;
