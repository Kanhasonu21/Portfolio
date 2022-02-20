import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from 'react-icons/di';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 className='techicons-img' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact className='techicons-img' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs className='techicons-img' />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb className='techicons-img' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython className='techicons-img' />
      </Col>
    </Row>
  );
}

export default Techstack;
