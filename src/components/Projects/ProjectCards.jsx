import React from 'react';

import {  Row, Col,  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineLink } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

function ProjectCards(props) {
  return (
    <>
      <div className='project-title'>
        <span>{props.title}</span>
        <AiOutlineLink
          className='link-icon'
          onClick={(_) => (window.location = props.projectLink)}
        />
      </div>
      <Row className='project-details'>
        <Col md={4}>
          <img
            loading='lazy'
            className='project-image'
            src={props.imgPath}
            alt={'images'}
          />
        </Col>
        <Col md={8}>
          <div className='project-info'>
            <div className='project-description '>
              <div>
                <span>{props.description}</span>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <span>Tech Stack : </span>
                {props.techStack.map((item, index) => (
                  <span className='tech-stack'>{item}</span>
                ))}
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Button onClick={(_) => (window.location = props.projectLink)}>
                  Github <FiExternalLink />
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default ProjectCards;
